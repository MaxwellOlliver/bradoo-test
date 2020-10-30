# Update Vendor

Updates Vendor corresponding the PK value sent on params.

**URL** : `/vendors/:pk`

**Method** : `PUT`

**Data constraints**

```json
{
    "name": "STRING",
    "cnpj": "STRING - ONLY VALID CNPJ",
    "city": "STRING"
}
```

**Data example**

all fields are required.

```json
{
    "name": "foo2",
    "cnpj": "20.599.009/0001-78",
    "city": "Rio de Janeiro"
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Response

**Condition** : Vendor does not exist

**Code** : `404 NOT FOUND`

**Content**

```json
{
    "error": "Vendor does not exists"
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "Error": "fieldName is a required field."
}
```

### Or 

**Condition** : If CNPJ is invalid.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "Error": "Invalid CNPJ"
}
```