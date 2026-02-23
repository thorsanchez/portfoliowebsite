variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "openrouter_api_key" {
  description = "OpenRouter API Key"
  type        = string
  sensitive   = true
}
