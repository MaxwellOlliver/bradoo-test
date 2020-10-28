import { Request, Response, Router } from 'express'
import { createProductController } from './useCases/CreateProduct';
import { createVendorController } from './useCases/CreateVendor';
import { deleteProductController } from './useCases/DeleteProduct';
import { deleteVendorController } from './useCases/DeleteVendor';
import { listProductsController } from './useCases/ListProduct';
import { listVendorsController } from './useCases/ListVendor';
import { updateProductController } from './useCases/UpdateProduct';
import { updateVendorController } from './useCases/UpdateVendor';

const router = Router();

router.post('/vendors', (request: Request, response: Response) => {
  return createVendorController.handle(request, response);
});

router.get('/vendors', (request: Request, response: Response) => {
  return listVendorsController.handle(request, response);
});

router.put('/vendors/:vendorId', (request: Request, response: Response) => {
  return updateVendorController.handle(request, response);
});

router.delete('/vendors/:vendorId', (request: Request, response: Response) => {
  return deleteVendorController.handle(request, response);
});

router.post('/vendors/product', (request: Request, response: Response) => {
  return createProductController.handle(request, response);
});

router.get('/vendors/product', (request: Request, response: Response) => {
  return listProductsController.handle(request, response);
});

router.put('/vendors/product/:productId', (request: Request, response: Response) => {
  return updateProductController.handle(request, response)
});

router.delete('/vendors/product/:productId', (request: Request, response: Response) => {
  return deleteProductController.handle(request, response)
});

export { router };