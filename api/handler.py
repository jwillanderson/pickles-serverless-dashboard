import json
import os
import logging

from common import pickles

LOGGING_LEVEL_NAME = os.getenv("LOGGING_LEVEL", "INFO")

LOGGER = logging.getLogger()
LOGGER.setLevel(logging.getLevelName(LOGGING_LEVEL_NAME))


def handle(event, context):
    try:
        response = handle_request()
    except RuntimeError:
        response = build_response(500)

    return response


def handle_request():
    job_data = pickles.get_pickle_data()
    response_body = {
        'data': job_data
    }

    return build_response(200, response_body)

def build_response(status_code, body=None):
    response = {
        "headers": {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': "true",
        },
        "statusCode": status_code
    }

    if body is not None:
        response["body"] = json.dumps(body)

    return response
