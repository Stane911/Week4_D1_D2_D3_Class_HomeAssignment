import {test} from "@playwright/test"
test('enum', async ({page}) => {

enum environment{
LOCAL="LOC",
DEVELOPMENT="DEV",
STAGING="STG",
PRODUCTION="PROD",
}
function runTests(test1:environment):void{
console.log("the running test is "+ test1)
}
console.log(environment.LOCAL)
console.log(environment.DEVELOPMENT)
console.log(environment.STAGING)
console.log(environment.PRODUCTION)


// Without VOID 

function runTest(test1:environment):String
{
    return "The Running test is "+ test1
}

console.log(runTest(environment.LOCAL))
console.log(runTest(environment.DEVELOPMENT))
console.log(runTest(environment.STAGING))
console.log(runTest(environment.PRODUCTION))
})




