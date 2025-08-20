const {model} = require ('mongoose');

const {postionSchema}  = require ('../Schema/positionSchema') ;

const PositionModel =  new model ('position' ,postionSchema );


module.exports = {PositionModel}