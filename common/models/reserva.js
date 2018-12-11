'use strict';

module.exports = function(Reserva) {
    Reserva.beforeRemote('create', function(context, user, next) {
    
    context.args.data.usuarioId = context.req.accessToken.userId;
    if(context.args.data.desde>context.args.data.hasta){
        context.args.data.desde="err, desde es mayor que hasta";
    }
    next();
  });
  
    /**
     * Las habitaciones que estan ocupadas
     * @param {number} desde Deveria ser <= que el momento actual
     * @param {number} hasta Deveria ser > que el momento actual
     * @param {Function(Error, string)} callback
     */
    
    Reserva.habitacionesOcupadas = function (desde, hasta, callback) {
        var lista="'ocupadas': ["; 
        // TODO
        callback(null, lista);
    };

  
};
