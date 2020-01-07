# Pickles - A Serverless Dashboard Framework
## Introduction
This framework was built to provide a Serverless Solution to running a Dashboard in AWS.
Using the [Serverless Framework](https://www.serverless.com) and built using AWS Resources it 
provides a Angular Dashboard that can run from a S3 bucket without the need for any server based infrastructure.

The flow of the Framework is as follows:
- Using AWS Lambdas to collect data and store it in a central bucket using the Pickles library (provided in this project)
- Create either data-based (uses data from AWS Lambda Jobs) or non-data based widgets (don't need data from Jobs) for your 
dashboard under the `widgets` folder in the `frontend/src/app` directory 
- Create/Configure Dashboards for under the `dashboards` folder in the `frontend/src/app` directory

## Getting Started
### Requirements
- The Serverless Framework installed on your path - [Installation Guide](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- Python 3.8 with pipenv installed - [Installation Guide](https://pipenv.readthedocs.io/en/latest/)
- Angular 8+ installed globally - [Installation Guide](https://angular.io/guide/setup-local)
- Access to an AWS Account with a Permissions to create Resources - including the Creation of S3 Buckets, AWS Lambda and execution of CloudFormation Scripts

### Setting up your environment
After installing your requirements, You will need to run the following commands to setup the Backend Framework
```bash
# This will setup the terminal with your pipenv environment
pipenv shell
# This will install the dependencies under the virtual environment 
pipenv install
# This install the Dependencies required for the Serverless Framework
npm install
```

You will need to run the following commands to install the dependencies for the Frontend portion
```bash
# From inside the folder 'frontend'
npm install
```

### Deployment
Out of the box the Framework will deploy the following
 - A S3 Bucket (used for storing data from AWS Lambda Jobs)
 - An AWS Lambda behind an API Gateway instance (with an API Key) - This is used to retrieve the data from the S3 Bucket.
 - A Base IAM Managed Policy to allow the AWS Lambda Jobs to access the S3 Bucket.
 
Using the provided shell script
```
./deploy-dashboard.sh '<name-of-bucket-here>'
```
This will execute the following commands
1. Invoke the serverless framework deploy command with the bucket name provided to create the base service
2. Execute the Angular command (`ng build`) to compile the frontend application
3. Invoke the AWS CLI command to copy the contents of the `dist/pickles-frontend` folder into the configured bucket name 

### Creating Pickle Jobs
To get data onto your dashboard, you can either AWS Lambdas or other services to push data into the S3 Bucket. 
At the moment, it is setup for AWS Lambdas' but essentially you need to get a JSON Document into the `data` folder in the root of the S3 bucket,
under the key `<your job name>/data.json` so the full key of the object from the root of the bucket would be something like `data/example-function/data.json`.

#### Creating a AWS Lambda Jobs
Using the Serverless Framework documentation as a Guide you can add Functions to your dashboard service
    -  Reference: https://serverless.com/framework/docs/providers/aws/guide/functions/

When creating a Job it is advised that you specify a Custom IAM Role for your function so that you can specify the exact permissions that your
function can access. But you will need to import the following AWS Managed Roles for one for the Lambda Base Execution Permissions and the Role 
that enables access to the Data Bucket. Refer to the example job under `jobs/example-widget/resources/iam.yml` is you want to see it in action.

#### Adding your Job to the Serverless.yml file    
Once you have created your function and defined your role you will need to add the definition of the Jobs to the `serverless.yml` file to ensure
that the Serverless Framework can create the Lambdas and resources required. 

In the Serverless.yml file look at the `functions` section under the `example-job` to see how to configure a scheduled job. Note that the function's 
`role` if referring to the same role the was created earlier, you will need to add a reference to the `resources` sections in the same file to create
the role so that it can be used by the function.

Use the example job as a reference to get started. For more advanced function configuration, (eg. 'VPC Lambdas') refer to the 
[Serverless Framework YAML reference](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/) for more information.

### Creating Pickle Widgets
Widgets fit under 2 categories, Data-based Widgets (widgets that use the data from the Pickles Data API) 
and Non-Data-based Widgets (widgets that don't require data from the Pickles Data API)
You can use the following command to auto-generate a widget component under the `widgets` folder and add it to the Widgets module.
```bash
ng generate component widgets/example-widget --module widgets
```

### Creating Pickle Dashboards
Using the widgets (just Angular components), you can define dashboards by creating a Component in the Dashboards folder and importing it into the `DashboardModule`
You can use the following command to auto-generate a dashboard component under the `dashboards` folder and add it to Dashboard module.
```bash
ng generate component dashboards/example-dashboard --module dashboard
```