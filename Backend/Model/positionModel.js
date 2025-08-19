const {model} = require ('mongoose');

const {postionSchema}  = require ('../Schema/positionSchema') ;

const HoldingModel =  new model ('position' ,postionSchema );


module.exports = {postionSchema}