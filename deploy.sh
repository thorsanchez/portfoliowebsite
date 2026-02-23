#!/bin/bash

# Exit on error
set -e

echo "Cleaning up..."
rm -rf lambda_dist
rm -f lambda_function_payload.zip

echo "Creating distribution directory..."
mkdir -p lambda_dist

echo "Installing dependencies (Linux x86_64 versions)..."
# We force the platform to manylinux and implementation to CPython (cp)
# to ensure we get the exact binaries needed for AWS Lambda's Python 3.11 runtime.
pip install \
    --platform manylinux2014_x86_64 \
    --target ./lambda_dist \
    --implementation cp \
    --python-version 3.11 \
    --only-binary=:all: \
    --upgrade \
    --no-cache-dir \
    -r chatbot-backend/requirements.txt

echo "Copying source code..."
cp chatbot-backend/main.py ./lambda_dist/

echo "Creating zip payload..."
cd lambda_dist
zip -r ../lambda_function_payload.zip .
cd ..

echo "Package created: lambda_function_payload.zip"
echo "Now run: cd terraform && terraform apply -auto-approve -var=\"openrouter_api_key=\$OPENROUTER_API_KEY\""
