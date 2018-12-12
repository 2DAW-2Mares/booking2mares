'use strict';

module.exports = function(Hotel) {
    
    Hotel.beforeRemote('create', function(context, user, next) {
    
    context.args.data.usuarioId = context.req.accessToken.userId;
    for(i=0;i<3;i++){
        context.args.data.numero= 10 +i;
        context.args.data.categoria= "individual";
        context.args.data.precio= 60;
    }
    next();
  });
  /**
 * muestra habitaciones libres
 * @param {date} desde "desdes" es la fecha que queremos entrar al hotel
 * @param {date} hasta "hasta" es la fecha que queremos salir del hotel
 * @param {Function(Error, string)} callback
 */

Hotel.primeraLibre = function(desde, hasta, callback) {
  var lista;
  // TODO
  callback(null, lista);
};

  
};
