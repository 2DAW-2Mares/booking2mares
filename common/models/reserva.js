'use strict';

module.exports = function(Reserva) {
 Reserva.create('create', function (context, reserva, next) {
    context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });
};
