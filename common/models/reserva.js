'use strict';

module.exports = function(Reserva) {
    Reserva.beforeRemote('create', function(context, user, next) {
      context.args.data.usuarioId = context.req.accessToken.userId;

     
      if(context.args.data.desde>context.args.data.hasta){
          var mensaje="La fecha desde ha de ser inferior a la de hasta";
        callback(null, mensaje);
      }
      
      next();
    });

Reserva.hoy = function(desde, hasta, callback) {
   
        Reserva.find( {where: { desde: desde, key2: {lt: 'val2'}{pension: true}, function(err, results) {
        
            return callback(err, results);
        });
        
   

    
        callback(null, ocupadas);
   
    

  };
  
  };