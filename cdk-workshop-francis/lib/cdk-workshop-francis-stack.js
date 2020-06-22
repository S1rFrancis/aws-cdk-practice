"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
class CdkWorkshopFrancisStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //defines an AWS lambda resource
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler' // file is "hello", function is "handler"
        });
        // defines new API Gateway REST API resource backed by "hello" function
        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: hello
        });
    }
}
exports.CdkWorkshopFrancisStack = CdkWorkshopFrancisStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLWZyYW5jaXMtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstd29ya3Nob3AtZnJhbmNpcy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaURBQWdEO0FBRWhELE1BQWEsdUJBQXdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDcEQsWUFBWSxLQUFjLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLGdDQUFnQztRQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN0RCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLGVBQWUsQ0FBa0IseUNBQXlDO1NBQ3BGLENBQUMsQ0FBQztRQUVILHVFQUF1RTtRQUN2RSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWhCRCwwREFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSdcblxuZXhwb3J0IGNsYXNzIENka1dvcmtzaG9wRnJhbmNpc1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vZGVmaW5lcyBhbiBBV1MgbGFtYmRhIHJlc291cmNlXG4gICAgY29uc3QgaGVsbG8gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0hhbmRsZXInLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCwgICAgICAvLyBleGVjdXRpb24gZW52aXJvbm1lbnRcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksICAgIC8vIGNvZGUgbG9hZGVkIGZyb20gXCJsYW1iZGEgZGlyZWN0b3J5XCJcbiAgICAgIGhhbmRsZXI6ICdoZWxsby5oYW5kbGVyJyAgICAgICAgICAgICAgICAgIC8vIGZpbGUgaXMgXCJoZWxsb1wiLCBmdW5jdGlvbiBpcyBcImhhbmRsZXJcIlxuICAgIH0pO1xuXG4gICAgLy8gZGVmaW5lcyBuZXcgQVBJIEdhdGV3YXkgUkVTVCBBUEkgcmVzb3VyY2UgYmFja2VkIGJ5IFwiaGVsbG9cIiBmdW5jdGlvblxuICAgIG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdFbmRwb2ludCcsIHtcbiAgICAgIGhhbmRsZXI6IGhlbGxvXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==