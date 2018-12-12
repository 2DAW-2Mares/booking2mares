'use strict';

module.exports = function(Reserva) {
    Reserva.beforeRemote('create', function(context, user, next) {
    
    context.args.data.usuarioId = context.req.accessToken.userId;
    if(context.args.data.desde>context.args.data.hasta){
        context.args.data.desde="error, desde no puede ser mayor que hasta"
    }
    next();
  });
};
