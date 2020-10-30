# Bradoo test API REST

![Design Pattern](https://img.shields.io/badge/Backend_Design_Pattern-SOLID-success?style=flat)
![Node](https://img.shields.io/badge/Node-v14.8.0-success?style=flat)
![npm](https://img.shields.io/badge/npm-v6.14.7-success?style=flat)
![Express](https://img.shields.io/badge/Express-v4.17.1-success?style=flat)
![Typescript](https://img.shields.io/badge/Typescript-v4.0.3-success?style=flat)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.3.5-success?style=flat)

## API URL

* API URL : `https://bradoo-test-api.herokuapp.com/`

ps: All endpoints no require authentication

### Vendors

Each endpoint manipulates or displays information related to Vendors:

* [Create a Vendor](docs/vendors/post.md) : `POST /vendors`
* [List Vendors](docs/vendors/get.md) : `GET /vendors`
* [Update a Vendor](docs/vendors/put.md) : `PUT /vendors/:pk`
* [Delete a Vendor](docs/vendors/delete.md) : `DELETE /vendors/:pk`

### Account related

Endpoints to view and manipulate the products of the selected vendor.

* [Create a Product](accounts/get.md) : `POST /vendors/product`
* [List Vendor's product](accounts/post.md) : `GET /vendors/product?v=vendorPk`
* [Edit a Product](accounts/pk/get.md) : `PUT /vendors/product/:pk`
* [Delete a Product](accounts/pk/put.md) : `DELETE /vendors/product/:pk`
