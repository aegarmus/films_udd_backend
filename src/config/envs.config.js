import dotenv from 'dotenv';

dotenv.config();

export const envs = {
    port: process.env.PORT || 3000,
    frontendUrl: process.env.URL_FRONTEND,
    db: {
        uri: process.env.MONGO_URI,
    },
    auth: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        secretKey: process.env.SECRET_KEY,
        jwtExpiration: process.env.JWT_EXPIRE,
    },
    mercadoPago: {
        mercadoPagoToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
        sandbox: process.env.MERCADOPAGO_SANDBOX || false
    }
};