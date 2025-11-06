cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarang Janawalkar</title>
</head>
<body>
    <h1>Coming Soon</h1>
    <p>Tarang Janawalkar</p>
</body>
</html>
EOF

BUCKET_NAME=$(terraform -chdir=terraform output -raw s3_bucket_name)
aws s3 cp index.html "s3://${BUCKET_NAME}/index.html" \
  --content-type "text/html" \
  --profile personal

rm index.html
