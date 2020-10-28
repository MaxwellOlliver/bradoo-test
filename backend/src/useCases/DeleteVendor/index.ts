import { MongoVendorsRepository } from "../../repositories/implementations/MongoVendorsRepository";
import { DeleteVendorController } from "./DeleteVendorController";
import { DeleteVendorUseCase } from "./DeleteVendorUseCase";

const mongoVendorsRepository = new MongoVendorsRepository();

const deleteVendorUseCase = new DeleteVendorUseCase(mongoVendorsRepository);

const deleteVendorController = new DeleteVendorController(deleteVendorUseCase);

export { deleteVendorUseCase, deleteVendorController };