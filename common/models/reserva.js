'use strict';

module.exports = function (Reserva) {
    Reserva.beforeRemote('create', function (context, reserva, next) {
        context.args.data.usuarioId = context.req.accessToken.userId;
        if (desde.Reserva >= hasta.Reserva)
            next();
        else
            console.error;
    });
    /**
 * muestra las habitaciones ocupadas actualmente
 * @param {Function(Error, array)} callback
 */

    Reserva.hoy = function (callback) {
        var ocupadas;
        var fechahoy = Date.now();
        if (desde <= fechahoy && hasta > fechahoy) {

            ocupadas = findByid({
                'where': {
                    and: ['desde' <= fechahoy,'hasta'>fechahoy]
            },include:"habitacion"
            });
        }
        callback(null, ocupadas);
    };


};
