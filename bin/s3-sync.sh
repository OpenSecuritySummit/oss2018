BUCKET_NAME="open-security-summit.com-cdn"
DISTRIBUTION_ID=E22WEBPD6529KA


# --delete is having a nasty side effect to bring the side down when
# aws s3 sync --acl "public-read" --sse "AES256" public/ s3://$BUCKET_NAME --delete

aws s3 sync --acl "public-read" --sse "AES256" public/ s3://$BUCKET_NAME
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths /index.html / /page/* /css/* /blog/* /contact/* /challenges/* /roles/* /recruiters/* /working-sessions/*