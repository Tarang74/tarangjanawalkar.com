#!/bin/bash
set -e

cd app/
npm run build
cd ..

BUCKET_NAME=$(terraform -chdir=terraform output -raw s3_bucket_name)

# Delete old files
aws s3 rm "s3://${BUCKET_NAME}" --recursive --profile personal

# Upload static assets with long-term cache
aws s3 sync app/dist/ "s3://${BUCKET_NAME}/" \
  --profile personal \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html"

# Upload HTML files with no cache
aws s3 sync app/dist/ "s3://${BUCKET_NAME}/" \
  --profile personal \
  --cache-control "public, max-age=0, must-revalidate" \
  --content-type "text/html" \
  --exclude "*" \
  --include "*.html"
