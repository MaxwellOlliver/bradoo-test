# Create Product

Create a Vendor's product.

**URL** : `/vendors/product`

**Method** : `POST`

**Data constraints**

Provide name, code, and price to be created.

```json
{
	"vendor_id": "INTEGER - Vendor PK",
	"name": "STRING",
	"code": "STRING",
	"price": "FLOAT",
}
```

**Data example** All fields must be sent.

```json
{
	"vendor_id": 25,
	"name": "Pen",
	"code": "000",
	"price": 2.50,
}
```

## Success Response

**Condition** : If everything is OK and the sent CNPJ is available.

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 1,
    "name": "Pen",
    "vendor_id": 1,
    "price": 2.50,
    "code": "000",
    "updatedAt": "2020-10-27T19:57:34.957Z",
    "createdAt": "2020-10-27T19:57:34.957Z"
}
```

## Error Responses

**Condition** : `This Vendor already have a Product with code productCode.`

**Code** : `400 BAD REQUEST`

**Content** : 

```json
{
    "error": "This Vendor already have a Product with code 000."
}
```

### Or

**Condition** : Vendor does not exists.

**Code** : `404 BAD REQUEST`

**Content example**

```json
{
    "Error": "Vendor does not exists"
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
