# Delete Vendor

Delete the Vendor corresponding to PK value sent on params.

**URL** : `/vendors/:pk`

**URL Parameters** : `pk=[integer]` where `pk` is the ID of the Vendor in the
database.

**Method** : `DELETE`

**Data** : `{}`

## Success Response

**Condition** : If the Vendor exists.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If the Vendor does not exists.

**Code** : `404 NOT FOUND`

**Content** : `{}`

## Notes

* Will remove all products belonging to that vendor.
