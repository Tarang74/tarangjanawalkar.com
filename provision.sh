#!/bin/bash
set -euo pipefail

terraform -chdir=terraform init
terraform -chdir=terraform validate
terraform -chdir=terraform apply -auto-approve

