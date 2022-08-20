# pario_solutions_demo
A demo API for pario solutions


## API ERD
![Pent API ERD](pari_solutions.jpg "pari_solutions")


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
    *   **Logout** - /api/users/logout  - GET
        -   **response (cookies logout)**
            ```json
                {
                    "status": "success",
                }

2)  ## **Apartment**
    *   **add apartment** - /api/apartments  - POST
        -   **request**
            ```json
                {
                    "address": "34 xyz layout district",
                    "city": "Apo",
                    "district": "Wumba",
                    "state": "Abuja",
                    "country": "Nigeria"
                }
            ```
        -   **response**
            ```json
                {
                    "status": "success",
                    "apartment": {
                        "address": "34 xyz layout district",
                        "city": "Apo",
                        "district": "Wumba",
                        "state": "Abuja",
                        "country": "Nigeria"
                        "user": "63014eda5c3e3dc93f1c64bb",
                        "_id": "630152a65c3e3dc93f1c64be",
                        "__v": 0,
                        "id": "630152a65c3e3dc93f1c64be"
                    }
                }
            ```
    *   **get all apartments** - /api/apartments  - GET
        -   **response**
            ```json
                {
                    "status": "success",
                    "result": 1,
                    "apartments": [
                        {
                        "address": "34 xyz layout district",
                        "city": "Apo",
                        "district": "Wumba",
                        "state": "Abuja",
                        "country": "Nigeria"
                        "user": "63014eda5c3e3dc93f1c64bb",
                        "_id": "630152a65c3e3dc93f1c64be",
                        "__v": 0,
                        "id": "630152a65c3e3dc93f1c64be"
                        },
                    ]
                }
            ```
    *   **get all apartments created by the authenticated user** - /api/apartments/me  - GET
        -   **response**
            ```json
                {
                    "status": "success",
                    "result": 1,
                    "apartments": [
                        {
                        "address": "34 xyz layout district",
                        "city": "Apo",
                        "district": "Wumba",
                        "state": "Abuja",
                        "country": "Nigeria"
                        "user": "63014eda5c3e3dc93f1c64bb",
                        "_id": "630152a65c3e3dc93f1c64be",
                        "__v": 0,
                        "id": "630152a65c3e3dc93f1c64be"
                        },
                    ]
                }
            ```
    *   **get apartment by id** - /api/apartments/:id - GET
        -   **response**
            ```json
                {
                    "status": "success",
                    "apartment": {
                        "address": "34 xyz layout district",
                        "city": "Apo",
                        "district": "Wumba",
                        "state": "Abuja",
                        "country": "Nigeria"
                        "user": "63014eda5c3e3dc93f1c64bb",
                        "__v": 0,
                        "review": {
                            "_id": "63013ae284752f6a54993b37",
                            "comment": "hello world",
                            "images": [
                                "image_6301385007bcaaafdffe9e1f1661024994627.jpg"
                            ],
                            "videos": [],
                            "upvote": 1,
                            "apartment": "6301385007bcaaafdffe9e1f",
                            "user": "6301384707bcaaafdffe9e1b",
                            "__v": 0,
                            "id": "63013ae284752f6a54993b37"
                        },
                        "id": "6301385007bcaaafdffe9e1f"
                    }
                }
            ```
    *   **update apartment** - /api/apartments/:id - PATCH
        -   **request**
            ```json
                {
                    "district": "vahmelin"
                }
            ```
        -   **response**
            ```json
                {
                    "status": "success",
                    "apartment": {
                        "address": "34 xyz layout district",
                        "city": "Apo",
                        "district": "vahmelin",
                        "state": "Abuja",
                        "country": "Nigeria"
                        "user": "63014eda5c3e3dc93f1c64bb",
                        "_id": "630152a65c3e3dc93f1c64be",
                        "__v": 0,
                        "id": "630152a65c3e3dc93f1c64be"
                    }
                }
            ```
    *   **delete apartment** - /api/apartments/:id - DELETE
        -   **response**
            ```json
                null
            ```

3)  ## **Review**
    *   **create Review** - /api/apartments/:apartment_id/reviews  - POST
        -   **request**
            NB: images and videos fields should be a file(s)
            ```json
                {
                    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    "images": "['image_83878299020.png', 'image_09877286748.png']",
                    "videos": "['video_02983828910.mp4', 'video_93893928829.mp4']",
                }
            ```
        -   **response**
            ```json
                {
                    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    "images": "['image_83878299020.png', 'image_09877286748.png']",
                    "videos": "['video_02983828910.mp4', 'video_93893928829.mp4']",
                    "upvote": 0,
                    "user": "63014eda5c3e3dc93f1c64bb",
                    "apartment": "6301385007bcaaafdffe9e1f"
                }
            ```

4)  ## **Upvote**
    *   **upvote review** - /api/reviews/:review_id - GET
        -   **response**
            ```json
                {
                    "status": "success",
                    "upvote": {
                        "ipAddress": "::1",
                        "review": "63013ae284752f6a54993b37",
                        "_id": "630159955c3e3dc93f1c64ca",
                        "__v": 0,
                        "id": "630159955c3e3dc93f1c64ca"
                    }
                }
            ```