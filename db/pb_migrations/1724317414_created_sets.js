/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jmv4rdx8n4b09ym",
    "created": "2024-08-22 09:03:34.292Z",
    "updated": "2024-08-22 09:03:34.292Z",
    "name": "sets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fjmwylow",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nxzlewyr",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ezc25toh",
        "name": "public",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "rrmr7rgk",
        "name": "creator",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "creator.id = @request.auth.id || public = true",
    "viewRule": "creator.id = @request.auth.id || public = true",
    "createRule": "creator.id = @request.auth.id",
    "updateRule": "creator.id = @request.auth.id",
    "deleteRule": "creator.id = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jmv4rdx8n4b09ym");

  return dao.deleteCollection(collection);
})
