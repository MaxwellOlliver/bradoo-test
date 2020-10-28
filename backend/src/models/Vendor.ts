import Sequelize, { Model } from 'sequelize';
import database from '../database';

class Vendor extends Model {
  public id!: number;
  public name: string;
  public cnpj: string;
  public city: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Vendor.init({
    name: Sequelize.STRING,
    cnpj: Sequelize.STRING,
    city: Sequelize.STRING,
  }, {
    sequelize: database.connection
  }
);

export default Vendor;