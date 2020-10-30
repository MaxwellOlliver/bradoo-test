# Update Vendor

Updates Vendor corresponding the PK value sent on params.

**URL** : `/vendors/product/:pk`

**Method** : `PUT`

**Data constraints**

```json
{
    "name": "STRING",
    "code": "STRING - ONLY VALID CNPJ",
    "price": "FLOAT NUMBER"
}
```

**Data example**

all fields are required.

```json
{
	"vendor_id": 1,
	"name": "Pen",
	"code": "000",
	"price": 2.50
}
```

## Success Responses

**Condition** : Update can be performed either fully or partially.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Response

**Condition** : Vendor does not exists

**Code** : `404 NOT FOUND`

**Content**

```json
{
    "error": "Vendor does not exists"
}
```

### Or

**Condition** : Product does not exists

**Code** : `404 NOT FOUND`

**Content**

```json
{
    "error": "Product does not exists"
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "error": "fieldName is a required field."
}
```

### Or

**Condition** : `This Vendor already have a Product with code productCode.`

**Code** : `400 BAD REQUEST`

**Content** : 

```json
{
    "error": "This Vendor already have a Product with code 000."
}
```