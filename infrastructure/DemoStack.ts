import * as path from 'path';
import {
    App,
    Stack,
    StackProps
} from '@aws-cdk/cdk';

import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from '@aws-cdk/aws-apigateway'

class DemoStack extends Stack {
    constructor(parent: App, name: string, props?: StackProps) {
        super(parent, name, props)

        const demoFunction = new lambda.Function(this, 'demoFunction', {
            runtime: lambda.Runtime.NodeJS810,
            code: lambda.Code.asset(path.join(__dirname, '../src')),
            handler: 'lambda.handler'
        });

        new apigateway.LambdaRestApi(this, 'demoAPI', {
            handler: demoFunction
        });
    }
}

export default DemoStack
