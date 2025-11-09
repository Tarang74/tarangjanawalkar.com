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

resource "cloudflare_ruleset" "www_redirect" {
  zone_id = var.cloudflare_zone_id
  name    = "www ~> apex"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [
    {
      action     = "redirect"
      expression = "(http.host eq \"www.${var.domain}\")"
      action_parameters = {
        from_value = {
          status_code = 301
          target_url = {
            expression = "concat(\"https://${var.domain}\", http.request.uri.path)"
          }
          preserve_query_string = true
        }
      }
    }
  ]
}
