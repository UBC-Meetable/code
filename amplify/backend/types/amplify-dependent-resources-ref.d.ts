export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "meetablea02db50ea02db50e": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        },
        "userPoolGroups": {
            "usersGroupRole": "string"
        }
    },
    "api": {
        "meetable": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "joinFriendGroup": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "pushNotification": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "getSuggestedFriends": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "profilePictures": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "meetable": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}