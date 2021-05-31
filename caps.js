'use strict';

const events=require('./events.js');
const {vendors}=require('./statesOfPackages/vendors.js')
const {driver}=require('./statesOfPackages/driver.js')


events.on('pickup',vendors.monitorData);
events.on('delivered',driver.monitorDelivered);
events.on('in-transit',driver.monitorInTransit);