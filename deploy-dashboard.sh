BUCKET_NAME=$1

if [ -z "$BUCKET_NAME" ]; then
    echo "Need to define a Bucket Name"
    exit 1;
fi

echo "------------------------ Building the Frontend ------------------------"
( cd frontend || exit ; ng build )

echo "------------------------ Deploying the Frontend ------------------------"
aws s3 cp "frontend/dist" s3://"$BUCKET_NAME" --recursive