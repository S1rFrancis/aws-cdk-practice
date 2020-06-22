"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
const hitcounter_1 = require("./hitcounter");
const cdk_dynamo_table_viewer_1 = require("cdk-dynamo-table-viewer");
class CdkWorkshopFrancisStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //defines an AWS lambda resource
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler' // file is "hello", function is "handler"
        });
        const helloWithCounter = new hitcounter_1.HitCounter(this, 'HelloHitCounter', {
            downstream: hello
        });
        // defines new API Gateway REST API resource backed by "hello" function
        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: helloWithCounter.handler
        });
        new cdk_dynamo_table_viewer_1.TableViewer(this, 'ViewHitCounter', {
            title: 'Hello Hits',
            sortBy: '-hits',
            table: helloWithCounter.table
        });
    }
}
exports.CdkWorkshopFrancisStack = CdkWorkshopFrancisStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLWZyYW5jaXMtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstd29ya3Nob3AtZnJhbmNpcy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaURBQWdEO0FBRWhELDZDQUEwQztBQUMxQyxxRUFBc0Q7QUFHdEQsTUFBYSx1QkFBd0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNwRCxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsZ0NBQWdDO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3RELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsZUFBZSxDQUFrQix5Q0FBeUM7U0FDcEYsQ0FBQyxDQUFDO1FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQy9ELFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILHVFQUF1RTtRQUN2RSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLHFDQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3RDLEtBQUssRUFBRSxZQUFZO1lBQ25CLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBMUJELDBEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5J1xuXG5pbXBvcnQgeyBIaXRDb3VudGVyIH0gZnJvbSAnLi9oaXRjb3VudGVyJztcbmltcG9ydCB7IFRhYmxlVmlld2VyIH0gZnJvbSAnY2RrLWR5bmFtby10YWJsZS12aWV3ZXInO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdAYXdzLWNkay9hd3MtZHluYW1vZGInO1xuXG5leHBvcnQgY2xhc3MgQ2RrV29ya3Nob3BGcmFuY2lzU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy9kZWZpbmVzIGFuIEFXUyBsYW1iZGEgcmVzb3VyY2VcbiAgICBjb25zdCBoZWxsbyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvSGFuZGxlcicsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLCAgICAgIC8vIGV4ZWN1dGlvbiBlbnZpcm9ubWVudFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSwgICAgLy8gY29kZSBsb2FkZWQgZnJvbSBcImxhbWJkYSBkaXJlY3RvcnlcIlxuICAgICAgaGFuZGxlcjogJ2hlbGxvLmhhbmRsZXInICAgICAgICAgICAgICAgICAgLy8gZmlsZSBpcyBcImhlbGxvXCIsIGZ1bmN0aW9uIGlzIFwiaGFuZGxlclwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWxsb1dpdGhDb3VudGVyID0gbmV3IEhpdENvdW50ZXIodGhpcywgJ0hlbGxvSGl0Q291bnRlcicsIHtcbiAgICAgIGRvd25zdHJlYW06IGhlbGxvXG4gICAgfSk7XG5cbiAgICAvLyBkZWZpbmVzIG5ldyBBUEkgR2F0ZXdheSBSRVNUIEFQSSByZXNvdXJjZSBiYWNrZWQgYnkgXCJoZWxsb1wiIGZ1bmN0aW9uXG4gICAgbmV3IGFwaWd3LkxhbWJkYVJlc3RBcGkodGhpcywgJ0VuZHBvaW50Jywge1xuICAgICAgaGFuZGxlcjogaGVsbG9XaXRoQ291bnRlci5oYW5kbGVyXG4gICAgfSk7XG5cbiAgICBuZXcgVGFibGVWaWV3ZXIodGhpcywgJ1ZpZXdIaXRDb3VudGVyJywge1xuICAgICAgdGl0bGU6ICdIZWxsbyBIaXRzJyxcbiAgICAgIHNvcnRCeTogJy1oaXRzJyxcbiAgICAgIHRhYmxlOiBoZWxsb1dpdGhDb3VudGVyLnRhYmxlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==