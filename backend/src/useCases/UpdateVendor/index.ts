import { MongoVendorsRepository } from "../../repositories/implementations/MongoVendorsRepository";
import { UpdateVendorController } from "./UpdateVendorController";
import { UpdateVendorUseCase } from "./UpdateVendorUseCase";

const mongoVendorsRepositories = new MongoVendorsRepository();

const updateVendorUseCase = new UpdateVendorUseCase(mongoVendorsRepositories);

const updateVendorController = new UpdateVendorController(updateVendorUseCase);

export { updateVendorUseCase, updateVendorController };