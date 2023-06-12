import * as cdk from 'aws-cdk-lib';
import { aws_lambda as lambda } from 'aws-cdk-lib';

import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestcdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.DockerImageFunction(this, "TestLambdaFunction", {
      functionName: "TestLambdaFunction",
      code: lambda.DockerImageCode.fromImageAsset("./docker/", {
          file: "myimage/Dockerfile",
       } )
    });

  }
}
