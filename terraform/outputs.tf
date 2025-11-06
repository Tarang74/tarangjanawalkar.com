output "s3_bucket_name" {
  value = aws_s3_bucket.portfolio.id
}

output "s3_website_endpoint" {
  value = aws_s3_bucket_website_configuration.portfolio.website_endpoint
}

