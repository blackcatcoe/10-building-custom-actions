const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    // 1) Get some input values
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    // 2) Log some debug info
    core.notice(`Deploying ${distFolder} to ${bucket} in ${bucketRegion}`);

    // 3) Run the AWS CLI command
    // const s3Uri = `s3://${bucket}`
    // exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`);
    // core.notice('Hello from my custom JavaScript action!');
}

run();