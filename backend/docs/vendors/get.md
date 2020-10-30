# Show Vendors

List Vendors according to the parameters sent.

**URL** : `/vendors`

**Method** : `GET`

**URL Query Params** : 

No one of these values are required.

```json
{
    "q": "VALUE TO SEARCH BY",
    "field": "FIELD TO SEARCH BY",
    "page": "PAGE NUMBER - 20 values to page"
}
```

**URL example**:

Searching a vendor with "foo" name.

`/vendors?q=foo&field=name&page=1`


## Success Responses

**Condition** : Everything OK.

**Code** : `200 OK`

**Content** :

"next" value indicates if have a next page.

```json
{
    "vendors": [
        {
            "id": 19,
            "name": "foo",
            "cnpj": "20.599.009/0001-78",
            "city": "Rio de Janeiro",
            "createdAt": "2020-10-27T19:08:33.867Z",
            "updatedAt": "2020-10-27T19:08:33.867Z"
        }
    ],
    "next": false
}
```
