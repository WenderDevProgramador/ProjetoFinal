import { Sequelize } from 'sequelize';


export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'ead_development',
    username: 'ead',
    password: 'ead1234',
    define: {
        underscored: true,
    }
}
);