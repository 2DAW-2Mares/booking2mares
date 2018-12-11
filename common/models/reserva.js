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
   Reserva.hoy = function(ctx, callback) {
    var habReservadas = "hola";
    var fechaActual = Date.now();
    Reserva.find(
      { where: {
        hasta: {gt: fechaActual}}}
        , function callback(err, reservas) {
      console.log(reservas);
    });
    callback(null, habReservadas);
  };
   */

  Reserva.hoy = function(ctx, callback) {
    var habReservadas = "hola";
    var fechaActual = Date.now();
    Reserva.find(
      { where: {
        hasta: {gte: fechaActual}}, include: 'habitacion'}
        , function callback(err, reservas) {
      console.log(reservas);
    });
    callback(null, habReservadas);
  };

};
