output "function_url" {
  description = "The URL of the chatbot backend"
  value       = aws_lambda_function_url.chatbot_url.function_url
}
