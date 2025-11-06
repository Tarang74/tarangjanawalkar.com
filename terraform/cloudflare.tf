resource "cloudflare_dns_record" "apex" {
  name    = "@"
  type    = "CNAME"
  zone_id = var.cloudflare_zone_id
  content = aws_s3_bucket_website_configuration.portfolio.website_endpoint
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "www" {
  name    = "www"
  type    = "CNAME"
  zone_id = var.cloudflare_zone_id
  content = var.domain
  proxied = true
  ttl     = 1
}

