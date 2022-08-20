# pario_solutions_demo
A demo API for pario solutions


## API endpoints documentation

1)  ## **Authentication**
    *   **Login** - /api/users/login - POST
        -   **request**
            ```json
                {
                "email": "uzoagulujoshua@gmail.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                    "status": "success",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDEzODQ3MDdiY2FhYWZkZmZlOWUxYiIsImlhdCI6MTY2MTAyOTkyNywiZXhwIjoxNjYzNjIxOTI3fQ.c9vspFcPkGxa2yrZ6wcTvhYMUD8Jbw5_uXk1QIL-JkA",
                    "user": {
                        "_id": "6301384707bcaaafdffe9e1b",
                        "name": "Joshua",
                        "email": "uzoagulujoshua@yahoo.com",
                        "role": "user",
                        "createdAt": "2022-08-20T19:38:47.123Z",
                        "updatedAt": "2022-08-20T19:38:47.123Z",
                        "__v": 0
                    }
                }
            ```
    *   **Signup** - /api/users/login - POST
        -   **request**
            ```json
                {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                "status": "success",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE0ZWRhNWMzZTNkYzkzZjFjNjRiYiIsImlhdCI6MTY2MTAzMDEwNywiZXhwIjoxNjYzNjIyMTA3fQ.I8YN5RVAi_GVetj3E_rQuuaegftx_PQrXhUVgtxJRrg",
                "user": {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "role": "user",
                "_id": "63014eda5c3e3dc93f1c64bb",
                "createdAt": "2022-08-20T21:15:06.968Z",
                "updatedAt": "2022-08-20T21:15:06.968Z",
                "__v": 0
                }
                }
                ```

2)  ## **Apartment**
    *   **add apartment** - /api/users/login - POST
        -   **request**
            ```json
                {
                "email": "uzoagulujoshua@gmail.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                    "status": "success",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDEzODQ3MDdiY2FhYWZkZmZlOWUxYiIsImlhdCI6MTY2MTAyOTkyNywiZXhwIjoxNjYzNjIxOTI3fQ.c9vspFcPkGxa2yrZ6wcTvhYMUD8Jbw5_uXk1QIL-JkA",
                    "user": {
                        "_id": "6301384707bcaaafdffe9e1b",
                        "name": "Joshua",
                        "email": "uzoagulujoshua@yahoo.com",
                        "role": "user",
                        "createdAt": "2022-08-20T19:38:47.123Z",
                        "updatedAt": "2022-08-20T19:38:47.123Z",
                        "__v": 0
                    }
                }
            ```
    *   **get all apartments** - /api/users/login - POST
        -   **request**
            ```json
                {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                "status": "success",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE0ZWRhNWMzZTNkYzkzZjFjNjRiYiIsImlhdCI6MTY2MTAzMDEwNywiZXhwIjoxNjYzNjIyMTA3fQ.I8YN5RVAi_GVetj3E_rQuuaegftx_PQrXhUVgtxJRrg",
                "user": {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "role": "user",
                "_id": "63014eda5c3e3dc93f1c64bb",
                "createdAt": "2022-08-20T21:15:06.968Z",
                "updatedAt": "2022-08-20T21:15:06.968Z",
                "__v": 0
                }
                }
            ```
    *   **get apartment by id** - /api/users/login - POST
        -   **request**
            ```json
                {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                "status": "success",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE0ZWRhNWMzZTNkYzkzZjFjNjRiYiIsImlhdCI6MTY2MTAzMDEwNywiZXhwIjoxNjYzNjIyMTA3fQ.I8YN5RVAi_GVetj3E_rQuuaegftx_PQrXhUVgtxJRrg",
                "user": {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "role": "user",
                "_id": "63014eda5c3e3dc93f1c64bb",
                "createdAt": "2022-08-20T21:15:06.968Z",
                "updatedAt": "2022-08-20T21:15:06.968Z",
                "__v": 0
                }
                }
            ```
    *   **update apartment** - /api/users/login - POST
        -   **request**
            ```json
                {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                "status": "success",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE0ZWRhNWMzZTNkYzkzZjFjNjRiYiIsImlhdCI6MTY2MTAzMDEwNywiZXhwIjoxNjYzNjIyMTA3fQ.I8YN5RVAi_GVetj3E_rQuuaegftx_PQrXhUVgtxJRrg",
                "user": {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "role": "user",
                "_id": "63014eda5c3e3dc93f1c64bb",
                "createdAt": "2022-08-20T21:15:06.968Z",
                "updatedAt": "2022-08-20T21:15:06.968Z",
                "__v": 0
                }
                }
            ```
    *   **delete apartment** - /api/users/login - POST
        -   **request**
            ```json
                {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                "status": "success",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE0ZWRhNWMzZTNkYzkzZjFjNjRiYiIsImlhdCI6MTY2MTAzMDEwNywiZXhwIjoxNjYzNjIyMTA3fQ.I8YN5RVAi_GVetj3E_rQuuaegftx_PQrXhUVgtxJRrg",
                "user": {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "role": "user",
                "_id": "63014eda5c3e3dc93f1c64bb",
                "createdAt": "2022-08-20T21:15:06.968Z",
                "updatedAt": "2022-08-20T21:15:06.968Z",
                "__v": 0
                }
                }
            ```

3)  ## **Review**
    *   **create Review** - /api/users/login - POST
        -   **request**
            ```json
                {
                "email": "uzoagulujoshua@gmail.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                    "status": "success",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDEzODQ3MDdiY2FhYWZkZmZlOWUxYiIsImlhdCI6MTY2MTAyOTkyNywiZXhwIjoxNjYzNjIxOTI3fQ.c9vspFcPkGxa2yrZ6wcTvhYMUD8Jbw5_uXk1QIL-JkA",
                    "user": {
                        "_id": "6301384707bcaaafdffe9e1b",
                        "name": "Joshua",
                        "email": "uzoagulujoshua@yahoo.com",
                        "role": "user",
                        "createdAt": "2022-08-20T19:38:47.123Z",
                        "updatedAt": "2022-08-20T19:38:47.123Z",
                        "__v": 0
                    }
                }
            ```
    *   **update Review** - /api/users/login - POST
        -   **request**
            ```json
                {
                "name": "Joshua",
                "email": "uzoagulujoshua@yahoo.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                "status": "success",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE0ZWRhNWMzZTNkYzkzZjFjNjRiYiIsImlhdCI6MTY2MTAzMDEwNywiZXhwIjoxNjYzNjIyMTA3fQ.I8YN5RVAi_GVetj3E_rQuuaegftx_PQrXhUVgtxJRrg",
                    "user": {
                    "name": "Joshua",
                    "email": "uzoagulujoshua@yahoo.com",
                    "role": "user",
                    "_id": "63014eda5c3e3dc93f1c64bb",
                    "createdAt": "2022-08-20T21:15:06.968Z",
                    "updatedAt": "2022-08-20T21:15:06.968Z",
                    "__v": 0
                    }
                }
            ```

4)  ## **Upvote**
    *   **upvote review** - /api/users/login - POST
        -   **request**
            ```json
                {
                "email": "uzoagulujoshua@gmail.com",
                "password": "test1234"
                }
            ```
        -   **response**
            ```json
                {
                    "status": "success",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDEzODQ3MDdiY2FhYWZkZmZlOWUxYiIsImlhdCI6MTY2MTAyOTkyNywiZXhwIjoxNjYzNjIxOTI3fQ.c9vspFcPkGxa2yrZ6wcTvhYMUD8Jbw5_uXk1QIL-JkA",
                    "user": {
                        "_id": "6301384707bcaaafdffe9e1b",
                        "name": "Joshua",
                        "email": "uzoagulujoshua@yahoo.com",
                        "role": "user",
                        "createdAt": "2022-08-20T19:38:47.123Z",
                        "updatedAt": "2022-08-20T19:38:47.123Z",
                        "__v": 0
                    }
                }
            ```