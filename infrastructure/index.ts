import {
    App,
} from '@aws-cdk/cdk';

import DemoStack from './DemoStack';

const app = new App();

const demoStackConfig = {
    env: {
        region: 'us-west-2'
    }
};

new DemoStack(app, 'DemoStack', demoStackConfig);

app.run();
