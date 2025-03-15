//ODM
//Object Data Modeling

import mongoose from 'mongoose';
import { envs } from './envs.config.js';

const { db } = envs; 

export const dbConnect = async() => {
    try {
        await mongoose.connect(db.uri);
        console.log('Nos conectamos con MongoDB!! :D 🛸');
    } catch (error) {
        console.error('No nos pudimos conectar a MongoDB :c 😱', error);
    }
};
 