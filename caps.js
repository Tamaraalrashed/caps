'use strict';

const events=require('./events.js');
require('./statesOfPackages/vendors.js')
require('./statesOfPackages/driver.js')


events.on('pickup',monitorData);
events.on('delivered',monitorDelivered);
events.on('in-transit',monitorInTransit);



function monitorData(payload){
    console.log( 'EVENT',
    {event: 'pickup',
    time: new Date(),
    payload
});
}


function monitorDelivered(payload){
    console.log( 'EVENT',
    {event: 'delivered',
    time: new Date(),
    payload
})
}



function monitorInTransit(payload){
    console.log( 'EVENT',
    {event: 'in-transit',
    time: new Date(),
    payload
})  
}