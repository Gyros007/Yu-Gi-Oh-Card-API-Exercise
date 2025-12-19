# Yu-Gi-Oh Card API Exercise

## How to build the project image

```sh
docker build -t yu-gi-oh-card-api-exercise-app .
```

## How to run image (with docker-compose)

```sh
docker-compose up --build
```

## Example curl commands for the APIs

| Method | Endpoint               | Body                                                  | Description          |
| ------ | ---------------------- | ----------------------------------------------------- | -------------------- |
| POST   | `/api/cards`           | `{ "name": "Dark Magician", "type": "monster" }`      | Create a new card    |
| GET    | `/api/cards`           | –                                                     | Get all cards        |
| GET    | `/api/cards/<card_id>` | –                                                     | Get a card by its ID |
| PUT    | `/api/cards/<card_id>` | `{ "name": "Dark Magician Girl", "type": "monster" }` | Update a card        |
| DELETE | `/api/cards/<card_id>` | –                                                     | Delete a card        |

### Create a Card

curl -X POST <http://localhost:3000/api/cards> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dark Magician",
    "type": "monster"
  }'

Response (201 Created)
{
  "_id": "694550b6b40d1bdeb6a60ba0",
  "name": "Dark Magician",
  "type": "monster",
  "createdAt": "2025-12-19T13:18:46.832Z",
  "updatedAt": "2025-12-19T13:18:46.832Z",
  "__v": 0
}

### Get All Cards

curl -X GET <http://localhost:3000/api/cards>

Response (200 OK)

[
  {
    "_id": "694550b6b40d1bdeb6a60ba0",
    "name": "Dark Magician",
    "type": "monster",
    "createdAt": "2025-12-19T13:18:46.832Z",
    "updatedAt": "2025-12-19T13:18:46.832Z",
    "__v": 0
  },
  {
    "_id": "694552d1b40d1bdeb6a60ba1",
    "name": "Blue-Eyes White Dragon",
    "type": "monster",
    "createdAt": "2025-12-19T13:25:12.123Z",
    "updatedAt": "2025-12-19T13:25:12.123Z",
    "__v": 0
  }
]

### Get Card by ID

curl -X GET <http://localhost:3000/api/cards/><card_id>

Response (200 OK)

{
  "_id": "694550b6b40d1bdeb6a60ba0",
  "name": "Dark Magician",
  "type": "monster",
  "createdAt": "2025-12-19T13:18:46.832Z",
  "updatedAt": "2025-12-19T13:18:46.832Z",
  "__v": 0
}

Response if not found (404 Not Found)

{
  "message": "Card not found"
}

### Update Card

curl -X PUT <http://localhost:3000/api/cards/><card_id> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dark Magician Girl",
    "type": "monster"
  }'

Response (200 OK)

{
  "_id": "694550b6b40d1bdeb6a60ba0",
  "name": "Dark Magician Girl",
  "type": "monster",
  "createdAt": "2025-12-19T13:18:46.832Z",
  "updatedAt": "2025-12-19T13:30:10.456Z",
  "__v": 0
}

Response if not found (404 Not Found)

{
  "message": "Card not found"
}

### Delete Card

curl -X DELETE <http://localhost:3000/api/cards/><card_id>

Response (200 OK)

{
  "message": "Card deleted successfully"
}

Response if not found (404 Not Found)

{
  "message": "Card not found"
}
