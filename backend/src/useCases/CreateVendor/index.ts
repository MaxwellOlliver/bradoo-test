import { MongoProductsRepository } from "../../repositories/implementations/MongoProductsRepository";
import { MongoVendorsRepository } from "../../repositories/implementations/MongoVendorsRepository";
import { CreateVendorController } from "./CreateVendorController";
import { CreateVendorUseCase } from "./CreateVendorUseCase";

const mongoProductsRepository = new MongoProductsRepository();

const mongoVendorsRepositories = new MongoVendorsRepository(mongoProductsRepository);

const createVendorUseCase = new CreateVendorUseCase(mongoVendorsRepositories);

const createVendorController = new CreateVendorController(createVendorUseCase);

export { createVendorUseCase, createVendorController };