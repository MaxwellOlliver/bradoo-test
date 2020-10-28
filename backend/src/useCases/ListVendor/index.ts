import { MongoVendorsRepository } from "../../repositories/implementations/MongoVendorsRepository";
import { ListVendorsController } from "./ListVendorsController";
import { ListVendorsUseCase } from "./ListVendorsUseCase";

const mongoVendorsRepository = new MongoVendorsRepository();

const listVendorsUseCase = new ListVendorsUseCase(mongoVendorsRepository);

const listVendorsController = new ListVendorsController(listVendorsUseCase);

export { listVendorsController, listVendorsUseCase };