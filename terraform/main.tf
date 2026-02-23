provider "aws" {
  region = var.aws_region
}

# IAM Role for Lambda
resource "aws_iam_role" "lambda_exec" {
  name = "chatbot_lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Sid    = ""
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# Attach basic execution policy
resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Lambda Function
resource "aws_lambda_function" "chatbot_lambda" {
  filename      = "${path.module}/../lambda_function_payload.zip"
  function_name = "portfolio_chatbot"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "main.handler"
  runtime       = "python3.11"
  timeout       = 30
  memory_size   = 256

  environment {
    variables = {
      OPENROUTER_API_KEY = var.openrouter_api_key
    }
  }

  # Use the zip payload from parent directory
  source_code_hash = filebase64sha256("${path.module}/../lambda_function_payload.zip")
}

# Consolidated Lambda Function URL with Streaming and CORS
resource "aws_lambda_function_url" "chatbot_url" {
  function_name      = aws_lambda_function.chatbot_lambda.function_name
  authorization_type = "NONE"
  invoke_mode        = "RESPONSE_STREAM"

  cors {
    allow_credentials = true
    allow_origins     = ["https://www.thorsan.xyz"]
    allow_methods     = ["*"]
    allow_headers     = ["*"]
    max_age           = 86400
  }
}
