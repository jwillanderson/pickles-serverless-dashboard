import json
import logging
import os

import boto3

BUCKET_NAME = os.getenv("PICKLES_BUCKET_NAME")

if BUCKET_NAME is None:
    raise Exception("Unable to store without environment variable 'PICKLES_BUCKET_NAME'")

S3_CLIENT = boto3.client("s3")

LOGGING_LEVEL_NAME = os.getenv("LOGGING_LEVEL", "INFO")

LOGGER = logging.getLogger()
LOGGER.setLevel(logging.getLevelName(LOGGING_LEVEL_NAME))


def get_key_name(key: str):
    if key is None or len(key) == 0:
        raise RuntimeError("Unable to process key name from None or Empty Input")

    key_arr = key.split("/")
    if key_arr.__len__() == 3:
        return key_arr[1]
    else:
        raise RuntimeError(f"Unable to process key name for key: {key}, should be splittable into 3 parts.")


def store_data(job_name: str, data: dict):
    """
    Stores information in configured bucket
    @param job_name: Name of key to store it under
    @param data: The Result Data for the Job
    """
    json_to_store = json.dumps(data)
    LOGGER.info(f"Storing Data under key data/{job_name}/data.json")
    S3_CLIENT.put_object(Bucket=BUCKET_NAME, Key=f"data/{job_name}/data.json", Body=json_to_store)


def get_pickle_data():
    """
    Retrieves the Data from the S3 Data bucket for each of the Keys under the data folder.
    @return: The result of the data inside the configured bucket.
    """
    bucket_objects = S3_CLIENT.list_objects_v2(Bucket=BUCKET_NAME, Prefix="data")
    data = {}
    if 'Contents' in bucket_objects:
        for bucket_object in bucket_objects['Contents']:
            data_key = bucket_object.get('Key', None)
            if data_key is None:
                LOGGER.warning("Unable to find key 'Key' in Object from S3... skipping object")
                continue

            json_data = get_data_from_s3(data_key)
            if json_data is None:
                LOGGER.warning(f"Got no JSON Data for key: {data_key}... skipping object")
                continue

            data[get_key_name(data_key)] = json_data
    else:
        LOGGER.warning(f"Unable to find key 'Contents' in response from S3... returning empty response.")

    return data


def get_data_from_s3(key: str):
    file_object = S3_CLIENT.get_object(Bucket=BUCKET_NAME, Key=key)
    file_body = file_object.get('Body', None)
    if file_body is None:
        LOGGER.warning(f"Unable to find key 'Body' in object under Key: {key}")
        return None

    file_json_string = file_body.read().decode('utf-8')
    if file_json_string is None or len(file_json_string) == 0:
        LOGGER.warning(f"Unable to process file contents as it returned an empty string for key: {key}")
        return None

    return json.loads(file_json_string)
