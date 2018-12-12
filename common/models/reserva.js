'use strict';

module.exports = function(Reserva) {

  Reserva.beforeRemote('create', function (ctx, user, next) {

    var desde = ctx.args.data.desde;
    var hasta = ctx.args.data.hasta;

    if (desde > hasta){
      next(new Error('Comprueba la fechas'));
    }else {
      next();
    }


  });

};
