import express from 'express';
import { sequelize } from './database';


const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Database connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
    console.log(`Server is running on port ${PORT}`);
});
