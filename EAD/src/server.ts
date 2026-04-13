import express from 'express';
import { sequelize } from './database';
import { adminJs, adminJsRouter } from './adminjs';


const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.use(adminJs.options.rootPath, adminJsRouter);



app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Database connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
    console.log(`Server is running on port localhost:${PORT}`);
});
