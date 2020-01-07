import logging
import os
from datetime import datetime

from common import pickles

LOGGING_LEVEL_NAME = os.getenv("LOGGING_LEVEL", "INFO")

LOGGER = logging.getLogger()
LOGGER.setLevel(logging.getLevelName(LOGGING_LEVEL_NAME))

PICKLES_JOB_NAME = "example-pickles-job"


def do_something(event, context):
    body = {
        "foo": "bar",
        "date": datetime.now()
    }

    pickles.store_data(PICKLES_JOB_NAME, body)

    return True
