import {
    App,
    Stack,
    StackProps
} from '@aws-cdk/cdk';

// TODO: move this somewhere else
class DemoStack extends Stack {
    constructor(parent: App, name: string, props?: StackProps) {
        super(parent, name, props)
    }
}

class DemoApp extends App {
    constructor() {
        super()

        new DemoStack(this, 'DemoStack')
    }
}

new DemoApp().run();
