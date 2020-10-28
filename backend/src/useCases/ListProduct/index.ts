import { MongoProductsRepository } from "../../repositories/implementations/MongoProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const mongoProductsRepository = new MongoProductsRepository();

const listProductsUseCase = new ListProductsUseCase(mongoProductsRepository);

const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsController, listProductsUseCase };