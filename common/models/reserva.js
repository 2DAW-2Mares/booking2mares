'use strict';

module.exports = function(Reserva) {

  Reserva.beforeRemote('create', function (ctx, reserva, next) {
    var userId = ctx.req.accessToken.userId;

    ctx.args.data.usuarioId = userId;

    var desde = ctx.args.data.desde;
    var hasta = ctx.args.data.hasta;

    var errorF = new Error("error de fecha");
    
    if (desde > hasta){
      next(errorF);
    } else{
      next();
    }


  });

  /**
   * muestra las habitaciones reservadas de el día actual
   * @param {Function(Error, array)} callback
   */

  Reserva.hoy = function(callback) {
    var ocupadas = [];

    var currentDate = new Date();
    var fechaActual = currentDate.getDate() + currentDate.getHours();


    Reserva.find(null, function (err, res) {
      if (err) callback(err);

      for (var i = 0; i < res.length; i++){
        if (fechaActual >= res[i].desde && fechaActual <= res[i].hasta){
          ocupadas.push(res[i]);
        }
      }


      callback(null, ocupadas);

    });


  };


};
