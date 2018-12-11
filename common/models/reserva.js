'use strict';

module.exports = function(Reserva) {
  Reserva.beforeRemote('create', function(context, user, next,err) {
    context.args.data.usuarioId = context.req.accessToken.userId;
    if (context.args.data.desde>context.args.data.hasta){
        err=true;
    }
    if(err) throw "error en fechas";
    next();
  });

  /**
   *
   * @param {object} ctx
   * @param {Function(Error, array)} callback
   */

  Reserva.hoy = function(ctx, callback) {

    var dia=Date.now();
    var lista=[];


    var Hotel = Reserva.app.models.Hotel;
    console.info(Hotel);

    Hotel.findById(ctx.req.accessToken.userId, function (err, habitaciones) {
      if (err){
        callback(err);
      }
      habitaciones.buscar(function (err, lista) {
        if (err){
          callback(err);
        }
        console.info(err);
        console.info(favoritos);
        callback(null, lista);
      });
    });
};

};
