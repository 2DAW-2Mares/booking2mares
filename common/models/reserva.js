'use strict';

module.exports = function(Reserva) {
    Reserva.beforeRemote('create', function (context, reserva, next) {
        context.args.data.usuarioId = context.req.accessToken.userId;
        next();
    });
};
