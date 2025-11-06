resource "aws_budgets_budget" "monthly_cost" {
  name              = "monthly-cost-alert"
  budget_type       = "COST"
  limit_amount      = "2"
  limit_unit        = "USD"
  time_period_start = "2025-11-01_00:00"
  time_unit         = "MONTHLY"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 80
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = [var.notification_email]
  }

  notification {
    comparison_operator        = "EQUAL_TO"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = [var.notification_email]
  }
}
