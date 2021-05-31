'use strict';
require('dotenv').config();
const faker = require('faker');

const events = require('../events.js');
let storeName = process.env.STORE_NAME; // amman branch


events.emit('pickup',{order:payload}) ;


setInterval(() => {
    let order={
        storeName:storeName,
        orderID:faker.datatype.uuid(), 
        customer: faker.name.findName(),
         address:faker.address.city()
    }
    return order
}, 5000);


function monitorData(payload){
    console.log( 'EVENT',
    {event: 'pickup',
    time: new Date(),
    payload: setInterval()});
}


function deliveredHandler(order){
    console.log(`Thank you${order.customer}`);
};







module.exports={deliveredHandler,monitorData};



// EVENT { event: 'pickup',
//   time: 2020-03-06T18:27:17.732Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }