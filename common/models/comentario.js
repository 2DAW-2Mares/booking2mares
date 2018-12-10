'use strict';

module.exports = function(Comentario) {
    Comentario.afterRemote('create', function(ctx, comentario, next) {
      var modeloHotel = Comentario.app.models.Hotel;
      var idHotel = comentario.hotelId;
      modeloHotel.updateAll( { where :{id: {like: idHotel}}},{votos: +1}, function(err, hotel) {
        if (err) throw (err);

      });

      next();
    });
};
