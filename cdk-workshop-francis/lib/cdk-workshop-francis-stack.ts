import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway'

import { HitCounter } from './hitcounter';
import { TableViewer } from 'cdk-dynamo-table-viewer';
import { Table } from '@aws-cdk/aws-dynamodb';

export class CdkWorkshopFrancisStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //defines an AWS lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,      // execution environment
      code: lambda.Code.fromAsset('lambda'),    // code loaded from "lambda directory"
      handler: 'hello.handler'                  // file is "hello", function is "handler"
    });

    const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello
    });

    // defines new API Gateway REST API resource backed by "hello" function
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWithCounter.handler
    });

    new TableViewer(this, 'ViewHitCounter', {
      title: 'Hello Hits',
      sortBy: '-hits',
      table: helloWithCounter.table
    });
  }
}
