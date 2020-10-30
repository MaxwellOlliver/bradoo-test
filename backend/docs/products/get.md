# Show Products

List a Vendor's product.

**URL** : `/vendors/product`

**Method** : `GET`

**URL Query Params** : 

Required.

```json
{
	"v": "INTEGER - Vendor PK"
}
```

**URL example**:

Listing the vendor's product with id 36.

`/vendors/products?v=36`


## Success Responses

**Condition** : Everything OK.

**Code** : `200 OK`

**Content** :

```json
[
	{
		"id": 1,
		"name": "Pencil",
		"code": "000",
		"price": 1.5,
		"createdAt": "2020-10-27T22:32:08.840Z",
		"updatedAt": "2020-10-28T13:47:25.398Z",
		"vendor_id": 36
  	},
	{
		"id": 2,
		"name": "Caneta",
		"code": "001",
		"price": 2.25,
		"createdAt": "2020-10-27T22:32:08.838Z",
		"updatedAt": "2020-10-28T13:48:55.515Z",
		"vendor_id": 36
  	},
]
```

## Error Responses

**Condition** : If Vendor id is not provided.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "error": "Vendor id not provided"
}
```