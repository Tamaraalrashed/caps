'use strict';
const faker = require('faker');

const events = require('../events.js');

events.on('pickup',inTransit);

function inTransit(payload){
  setTimeout(() => {
    console.log(`DRIVER:picked up ${payload.orderID}`);
    events.emit('in-transit',payload) ;
    
}, 1000);  

delivered(payload)

}



function delivered(payload){
  setTimeout(() => {
    console.log(`Delivered`);
    events.emit('delivered',payload) ;
    
}, 3000);    
}


