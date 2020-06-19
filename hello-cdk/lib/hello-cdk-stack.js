"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
class HelloCdkStack extends core.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        new s3.Bucket(this, 'MyFirstBucket', {
            versioned: true,
            removalPolicy: core.RemovalPolicy.DESTROY
        });
    }
}
exports.HelloCdkStack = HelloCdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tY2RrLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVsbG8tY2RrLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUV0QyxNQUFhLGFBQWMsU0FBUSxJQUFJLENBQUMsS0FBSztJQUMzQyxZQUFZLEtBQWUsRUFBRSxFQUFVLEVBQUUsS0FBdUI7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNkNBQTZDO1FBQzdDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ25DLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFWRCxzQ0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdAYXdzLWNkay9hd3MtczMnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9DZGtTdGFjayBleHRlbmRzIGNvcmUuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY29yZS5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY29yZS5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcbiAgICBuZXcgczMuQnVja2V0KHRoaXMsICdNeUZpcnN0QnVja2V0Jywge1xuICAgICAgdmVyc2lvbmVkOiB0cnVlLFxuICAgICAgcmVtb3ZhbFBvbGljeTogY29yZS5SZW1vdmFsUG9saWN5LkRFU1RST1lcbiAgICB9KTtcbiAgfVxufVxuIl19