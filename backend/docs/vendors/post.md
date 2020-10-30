# Create a Vendor

Create a Vendor record.

**URL** : `/vendors`

**Method** : `POST`

**Data constraints**

Provide name, CNPJ, city and a products array of Vendor to be created.

```json
{
    "name": "STRING",
    "cnpj": "STRING - ONLY VALID CNPJ",
    "city": "STRING",
    "products": [
    {
	"name": "STRING",
	"code": "STRING",
	"price": "FLOAT NUMBER"
    }
]
}
```

**Data example** All fields must be sent.

```json
{
    "name": "José",
    "cnpj": "93.475.335/0001-47",
    "city": "São Paulo",
    "products": [
    	{
            "name": "Pen",
	    "code": "000",
	    "price": 2.50
    	}
    ]
}
```

## Success Response

**Condition** : If everything is OK and the sent CNPJ is available.

**Code** : `201 CREATED`

**Content example**

```json
{
    "id": 56,
    "name": "José",
    "cnpj": "93.475.335/0001-47",
    "city": "São Paulo",
    "updatedAt": "2020-10-28T16:51:47.543Z",
    "createdAt": "2020-10-28T16:51:47.543Z",
    "products": [
      {
        "id": 1,
        "name": "Pen",
        "code": "000",
        "price": 2.50,
        "vendor_id": 56,
        "updatedAt": "2020-10-28T16:51:47.568Z",
        "createdAt": "2020-10-28T16:51:47.568Z"
      },
    ]
}
```

## Error Responses

**Condition** : Vendor already exists.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "error": "Vendor already exists"
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
