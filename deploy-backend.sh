BUCKET_NAME=$1

if [ -z "$BUCKET_NAME" ]; then
    echo "Need to define a Bucket Name"
    exit 1;
fi

echo "------------------------ Deploying Backend System ------------------------"
sls deploy --bucket-name "$BUCKET_NAME"
