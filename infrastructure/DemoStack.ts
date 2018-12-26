import {
    App,
    Stack,
    StackProps
} from '@aws-cdk/cdk';

import * as lambda from '@aws-cdk/aws-lambda'

class DemoStack extends Stack {
    constructor(parent: App, name: string, props?: StackProps) {
        super(parent, name, props)

        // TODO: is this used correctly here?
        new lambda.Function(this, 'demoFunction', {
            runtime: lambda.Runtime.NodeJS810,
            // NOTE: path below is relative to root directory (where cdk is called)
            code: lambda.Code.asset('dist/src'),
            handler: 'index.handler'
        })
    }
}

export default DemoStack
