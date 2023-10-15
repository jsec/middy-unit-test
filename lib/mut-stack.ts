/* eslint-disable no-new */
import * as cdk from 'aws-cdk-lib';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import type { Construct } from 'constructs';

export class MutStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, 'TestFunction', {
      architecture: Architecture.ARM_64,
      runtime: Runtime.NODEJS_18_X
    });
  }
}
