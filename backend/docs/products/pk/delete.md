# Delete Product

Delete the Product corresponding to PK value sent on params.

**URL** : `/vendors/product/:pk`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Vendor in the
database.

**Method** : `DELETE`

**Data** : `{}`

## Success Response

**Condition** : If the Product exists.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If the Product does not exists.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
  "error": "Product does not exists"
}
```

