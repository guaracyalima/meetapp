import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // inicializa o sequelize com as credencias do db
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n ', databaseConfig);
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n ');
    this.connection = new Sequelize(databaseConfig);

    // passa para cada model a conexao
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
