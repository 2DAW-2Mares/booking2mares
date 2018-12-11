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
   * @param {date} Fecha
   * @param {Function(Error, array)} callback
   */

  Reserva.hoy = function(Fecha, callback) {
    var lista;
    // TODO
    callback(null, lista);
  };


};
