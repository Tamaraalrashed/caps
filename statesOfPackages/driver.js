'use strict';
const faker = require('faker');

const events = require('../events.js');


function inTransit(payload){
  setInterval(() => {
    let order={
        storeName:storeName,
        orderID:faker.datatype.uuid(), 
        customer: faker.name.findName(),
         address:faker.address.city()
    }
    console.log(`DRIVER:picked up ${order.orderID}`);
    events.emit('in-transit',payload) ;
    
}, 1000);  
}



function delivered(payload){
setInterval(() => {
    let order={
        storeName:storeName,
        orderID:faker.datatype.uuid(), 
        customer: faker.name.findName(),
         address:faker.address.city()
    }
    console.log(`Delivered`);
    events.emit('delivered',payload) ;
    
}, 3000);    
}



function monitorDelivered(payload){
    console.log( 'EVENT',
    {event: 'delivered',
    time: new Date(),
    payload: setInterval()});
   
}



function monitorInTransit(payload){
    console.log( 'EVENT',
    {event: 'delivered',
    time: new Date(),
    payload: setInterval()});
   
}
module.exports={inTransit,delivered,monitorDelivered,monitorInTransit};