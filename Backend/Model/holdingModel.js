const {model} = require ('mongoose');

const {holdingSchema}  = require ('../Schema/holdingSchema') ;

const HoldingModel =  new model ('holding' ,holdingSchema );


module.exports = {HoldingModel}