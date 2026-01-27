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

| Method | Endpoint               | Body                                                             | Description          |
| ------ | ---------------------- | -----------------------------------------------------------------| -------------------- |
| POST   | `/api/cards`           | `{ "name": "Dark Magician", "card_type": "Monster Card", ... }`  | Create a new card    |
| GET    | `/api/cards`           | –                                                                | Get all cards        |
| GET    | `/api/cards/<card_id>` | –                                                                | Get a card by its ID |
| PUT    | `/api/cards/<card_id>` | `{ "name": "Dark Magician Girl", "type": "Monster Card", ... }`  | Update a card        |
| DELETE | `/api/cards/<card_id>` | –                                                                | Delete a card        |

### Create a Card

curl -X POST <http://localhost:3000/api/cards> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dark Magician",
    "card_type": "Monster Card",
    "type": "Normal Monster",
    "desc": "''The ultimate wizard in terms of attack and defense.''",
    "race": "Spellcaster",
    "atk": 2500,
    "def": 2100,
    "level": 7,
    "attribute": "DARK",
    "card_images": [
      {
        "image_url": "https://images.ygoprodeck.com/images/cards/46986414.jpg",
        "image_url_small": "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
        "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg"
      }
    ]
  }'

Response (201 Created)
{
    "name": "Dark Magician",
    "desc": "''The ultimate wizard in terms of attack and defense.''",
    "card_images": [
        {
            "image_url": "https://images.ygoprodeck.com/images/cards/46986414.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg",
            "_id": "694953f02dc99ae47e0fa2c0"
        }
    ],
    "card_type": "Monster Card",
    "_id": "694953f02dc99ae47e0fa2bf",
    "type": "Normal Monster",
    "race": "Spellcaster",
    "atk": 2500,
    "def": 2100,
    "level": 7,
    "attribute": "DARK",
    "createdAt": "2025-12-22T14:21:36.922Z",
    "updatedAt": "2025-12-22T14:21:36.922Z",
    "__v": 0
}

### Get All Cards

curl -X GET <http://localhost:3000/api/cards>

Response (200 OK)

[
    {
        "_id": "694953f02dc99ae47e0fa2bf",
        "name": "Dark Magician",
        "desc": "''The ultimate wizard in terms of attack and defense.''",
        "card_images": [
            {
                "image_url": "https://images.ygoprodeck.com/images/cards/46986414.jpg",
                "image_url_small": "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
                "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg",
                "_id": "694953f02dc99ae47e0fa2c0"
            }
        ],
        "card_type": "Monster Card",
        "type": "Normal Monster",
        "race": "Spellcaster",
        "atk": 2500,
        "def": 2100,
        "level": 7,
        "attribute": "DARK",
        "createdAt": "2025-12-22T14:21:36.922Z",
        "updatedAt": "2025-12-22T14:21:36.922Z",
        "__v": 0
    },
    {
        "_id": "694954742dc99ae47e0fa2ca",
        "name": "Pot of Greed",
        "desc": "Draw 3 cards. (That is what it does)",
        "card_images": [
            {
                "image_url": "https://images.ygoprodeck.com/images/cards/55144522.jpg",
                "image_url_small": "https://images.ygoprodeck.com/images/cards_small/55144522.jpg",
                "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/55144522.jpg",
                "_id": "694954742dc99ae47e0fa2cb"
            }
        ],
        "card_type": "Spell Card",
        "race": "Normal",
        "createdAt": "2025-12-22T14:23:48.083Z",
        "updatedAt": "2025-12-22T14:23:48.083Z",
        "__v": 0
    }
]

### Get Card by ID

curl -X GET <http://localhost:3000/api/cards/><card_id>

Response (200 OK)

{
    "_id": "694954742dc99ae47e0fa2ca",
    "name": "Pot of Greed",
    "desc": "Draw 3 cards. (That is what it does)",
    "card_images": [
        {
            "image_url": "https://images.ygoprodeck.com/images/cards/55144522.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/55144522.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/55144522.jpg",
            "_id": "694954742dc99ae47e0fa2cb"
        }
    ],
    "card_type": "Spell Card",
    "race": "Normal",
    "createdAt": "2025-12-22T14:23:48.083Z",
    "updatedAt": "2025-12-22T14:23:48.083Z",
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
    "name": "Dark Magician Magician",
  }'

Response (200 OK)

{
    "_id": "694953f02dc99ae47e0fa2bf",
    "name": "Dark Magician Magician",
    "desc": "''The ultimate wizard in terms of attack and defense.''",
    "card_images": [
        {
            "image_url": "https://images.ygoprodeck.com/images/cards/46986414.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg",
            "_id": "694953f02dc99ae47e0fa2c0"
        }
    ],
    "card_type": "Monster Card",
    "type": "Normal Monster",
    "race": "Spellcaster",
    "atk": 2500,
    "def": 2100,
    "level": 7,
    "attribute": "DARK",
    "createdAt": "2025-12-22T14:21:36.922Z",
    "updatedAt": "2025-12-22T14:21:36.922Z",
    "__v": 0
},

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
