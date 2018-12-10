'use strict';

module.exports = function(Reserva) {
    Reserva.beforeRemote('create', function(ctx, reserva, next) {
      ctx.args.data.usuarioId = ctx.req.accessToken.userId;
      if (ctx.args.data.desde > ctx.args.data.hasta){
        next(new Error('Comprueba las fechas'));
      }else{
        next();
      }

    });

  /**
   * Devuelve las reservas del dia actual
   * @param {array} ctx context
   * @param {Function(Error, array)} callback
   */

  Reserva.hoy = function(ctx, callback) {
    var habReservadas = "hola";
    console.log(ctx);
    callback(null, habReservadas);
  };

};
