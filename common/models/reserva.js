'use strict';

module.exports = function(Reserva) {
 Reserva.miReserva = function (ctx, callback) {
    var Usuario = Reserva.app.models.Usuario;

    Usuario.findById(ctx.req.accessToken.userId, function (err, userId) {
      if (err)
        callback(err);
      else {
        Reserva.id=userId;
      }
    });
  };
};
