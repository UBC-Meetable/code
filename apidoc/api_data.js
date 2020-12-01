define({ "api": [
  {
    "type": "get",
    "url": "/chat/",
    "title": "Get All ChatMessage",
    "name": "GetChatMessages",
    "group": "Chat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "forms",
            "description": "<p>All chat messages in collection.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/chat/gid",
    "title": "Get ChatMessages By group id",
    "name": "GetMessagesByGroup",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>the group's database id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>The number of days before end date to fetch messages for</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end",
            "description": "<p>The number of days before present of end date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>array of ChatMessage, reverse chronological</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/forms/",
    "title": "Get All Forms",
    "name": "GetForms",
    "group": "Form",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "forms",
            "description": "<p>All forms in collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n     \"uid\": \"...\",\n     \"text\": \"...\"\n     },\n     {\n     }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/forms.js",
    "groupTitle": "Form"
  },
  {
    "type": "get",
    "url": "/forms/:uid",
    "title": "Get Forms By User Id",
    "name": "GetUserForms",
    "group": "Form",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "form",
            "description": "<p>Forms of user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n     \"uid\": \"...\",\n     \"text\": \"...\"\n     },\n     {\n     }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/forms.js",
    "groupTitle": "Form"
  },
  {
    "type": "get",
    "url": "/forms/:email",
    "title": "Get Forms By Email",
    "name": "GetUserFormsByEmail",
    "group": "Form",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "form",
            "description": "<p>Forms With Given Email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n     \"uid\": \"...\",\n     \"text\": \"...\"\n     },\n     {\n     }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/forms.js",
    "groupTitle": "Form"
  },
  {
    "type": "post",
    "url": "/forms/",
    "title": "Post Form",
    "name": "PostForm",
    "group": "Form",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text content of feedback.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n     \"uid\": \"...\",\n     \"text\": \"...\"\n     },\n     {\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The given attributes are invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/forms.js",
    "groupTitle": "Form"
  },
  {
    "type": "delete",
    "url": "/groups/",
    "title": "Delete a group",
    "name": "DeleteGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Group id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sucess message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "/chat/",
    "title": "Delete a message",
    "name": "DeleteMessage",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mid",
            "description": "<p>message _id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>group _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sucess message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/chat.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/groups/",
    "title": "Get all groups",
    "name": "GetGroups",
    "group": "Group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>All groups in collection.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/groups/",
    "title": "Removes all duplicate users from all groups",
    "name": "PruneGroups",
    "group": "Group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/groups.js",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/quizs/byid/",
    "title": "Update Quiz Add User id",
    "name": "AddIdToQuiz",
    "group": "Quiz",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qid",
            "description": "<p>Quiz id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "quiz",
            "description": "<p>The quiz modified.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The given id is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/quizs.js",
    "groupTitle": "Quiz"
  },
  {
    "type": "get",
    "url": "/quizs/byid/",
    "title": "Get Quiz by User id",
    "name": "GetQuizByUserId",
    "group": "Quiz",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "quiz",
            "description": "<p>The quiz with id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/quizs.js",
    "groupTitle": "Quiz"
  },
  {
    "type": "get",
    "url": "/quizs/",
    "title": "Get All Quizzes",
    "name": "GetQuizzes",
    "group": "Quiz",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "quizzes",
            "description": "<p>All quizzes in collection.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/quizs.js",
    "groupTitle": "Quiz"
  },
  {
    "type": "post",
    "url": "/quizs/",
    "title": "Post New Quiz Instance",
    "name": "PostNewQuiz",
    "group": "Quiz",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "quiz",
            "description": "<p>The quiz posted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>No apparent causes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/quizs.js",
    "groupTitle": "Quiz"
  },
  {
    "type": "put",
    "url": "/responses/",
    "title": "Put Response in Quiz",
    "name": "PutResponse",
    "group": "Response",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quizid",
            "description": "<p>Quiz instance id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Question text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Answer text</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The given attributes are invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/responses.js",
    "groupTitle": "Response"
  },
  {
    "type": "get",
    "url": "/users/getByEmail",
    "title": "Get User by email",
    "name": "GetUserByEmail",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "The",
            "description": "<p>User.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user's email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/getgroupsbyuserid/:uid",
    "title": "Get User by Id",
    "name": "GetUserById",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "The",
            "description": "<p>User.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>The user's id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/getgroupsbyuserid/:uid",
    "title": "Get User by Id",
    "name": "GetUserGroupsById",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>The list of groups joined by specified user.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>The user's id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Error",
            "description": "<p>Should never occur even if user has no groups.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get Users",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p>All Users In Collection.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/group/",
    "title": "Put User in Group",
    "name": "GroupUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "group",
            "description": "<p>The group that user was put in, populated with users.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>The user's id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "Error",
            "description": "<p>Any error resulting from bad state, not inputs to this endpoint.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Post User",
    "name": "PostUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The User Posted.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profileImage",
            "description": "<p>profile picture URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authid",
            "description": "<p>The user's auth0 id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user's email</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "UserExists",
            "description": "<p>The posted user already exists.</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The specified attributes are invalid for the specified reasons.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/updateprofile/",
    "title": "Update User Profile with arbitrary number of attributes",
    "name": "UpdateProfile",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>The user's id</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "any",
            "description": "<p>Any attribute specified in User model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Specified attributes invalid for specified reasons.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
