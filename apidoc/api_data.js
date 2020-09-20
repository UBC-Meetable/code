define({ "api": [
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
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
    "type": "put",
    "url": "/quizs/byid/",
    "title": "Update Quiz Add User id",
    "name": "AddIdToQuiz",
    "group": "Quiz",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>The given attributes are invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserExists",
            "description": "<p>The posted user already exists.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
