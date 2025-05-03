import { Preference } from 'mercadopago';
import client from '../../config/mercadoPago.config.js';

import { envs } from '../../config/envs.config.js';
import { PaymentsError } from '../../errors/TypeError.js';

const { frontendUrl } = envs;

//Cart debe ser un Array de Objetos
export const mercadopagoService = async( cart ) => {

    try {
        //Recomendación: llamar a esta varialbe items para simplificar despues el código
        //Vamos a estructurar los datos de los productos que vamos a enviar a Mercado Pago
        const items = cart.map((product) => ({
            title: product.nombre,
            unit_price: product.precio,
            quantity: product.quantity,
            currency_id: 'CLP'
        }));
    
        //Configuramos el cuerpo de configuración para las prefrencias de compra para Mercado Pago
        const body = {
            items,
            back_url: {
                success: `${frontendUrl}/mercadopago/status?status=approved`,
                failure: `${frontendUrl}/mercadopago/status?status=failure`,
                pending: `${frontendUrl}/mercadopago/status?status=pending`,
            },
        };

    
        //Cargar las preferencias de compra a Mercado Pago
        const preference = new Preference(client);
        const response = await preference.create( { body } );
        
        return response;
        
    } catch (error) {
        console.error(error);
        throw new PaymentsError('Error al intentar crear la preferencia de compra', 500, error);
    }

};



/*
url params: endpoint/:id => endpoint/5123 => req.params => { id: '5123'} => Usado para registros especificos o únicos

url query (query string): endpoint?name=juanito&age=30 => req.query => { name: 'juanito', age: '30' } => Usado para filtrar registros, paginación, ordenamiento, etc.
*/