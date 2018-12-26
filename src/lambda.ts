import * as awsServerlessExpress from 'aws-serverless-express';
import app from './app';

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/xml',
    'font/eot',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml'
]

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

export const handler = (event, context) => awsServerlessExpress.proxy(server, event, context);

// WHERE I LEFT OFF:
// have basic server set up, and this file should convert that server into something usable by aws lambda
// next step is to create my app/stack/lambda function. probably by copying the setup from: https://github.com/awslabs/aws-cdk/blob/master/examples/cdk-examples-typescript/chat-app/index.ts
// REMEMBER: the focus here is to decide what I need to do and how to get RockPapr's current server set up onto lambda