import { MongoProductsRepository } from "../../repositories/implementations/MongoProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const mongoProductRepository = new MongoProductsRepository();

const updateProductUseCase = new UpdateProductUseCase(mongoProductRepository);

const updateProductController = new UpdateProductController(updateProductUseCase);

export { updateProductController };