import { MongoProductsRepository } from "../../repositories/implementations/MongoProductsRepository";
import { MongoVendorsRepository } from "../../repositories/implementations/MongoVendorsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const mongoProductRepository = new MongoProductsRepository();

const mongoVendorsRepository = new MongoVendorsRepository();

const createProductUseCase = new CreateProductUseCase(mongoProductRepository, mongoVendorsRepository);

const createProductController = new CreateProductController(createProductUseCase);

export { createProductController };