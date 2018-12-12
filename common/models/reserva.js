'use strict';

module.exports = function(Reserva) {


Reserva.beforeRemote('create', function(ctx, reserva, next){

var err= new Error("Desde debe ser menor que Hasta");

if(ctx.args.data.desde>ctx.args.data.hasta)
next(err); 
else
next();

});


};
