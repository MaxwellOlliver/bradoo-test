import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Vendor from './Vendor';

class Product extends Model {
  public id!: number;
  public name: string;
  public code: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init({
    name: Sequelize.STRING,
    code: Sequelize.STRING,
    price: Sequelize.INTEGER,
  }, {
    sequelize: database.connection
  }
);

Product.belongsTo(Vendor, { foreignKey: 'vendor_id', as: 'vendor' })

export default Product;