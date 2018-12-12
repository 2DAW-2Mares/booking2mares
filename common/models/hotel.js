'use strict';

module.exports = function(Hotel) {


  Hotel.afterRemote('create', function (ctx, user, next) {

    Hotel.find(null, function (err, instance) {
      if (err) throw err

      var hotelId = instance[instance.length - 1].id;

      var hab = Hotel.app.models.Habitacion;

      hab.create([{
        "numero": 101,
        "categoria": "individual",
        "precio": 60,
        "hotelId": hotelId
      }, {
        "numero": 102,
        "categoria": "Doble",
        "precio": 75,
        "hotelId": hotelId
      }, {
        "numero": 103,
        "categoria": "Suite",
        "precio": 100,
        "hotelId": hotelId
      }])


      next();
    })

  });

  /**
   * Muestra la primera habitacion libre del hotel que se pide
   * @param {number} id id del hotel
   * @param {Function(Error, object)} callback
   */

  Hotel.primeraLibre = function (id, callback) {
    var libre;
    var fecha = Date.now();

    var hab = Hotel.app.models.Habitacion;
    var reserv = Hotel.app.models.Reserva;

    Hotel.findById(id, function (err, hotel) {
      if (err) callback(err);

      var hotelito = hotel.toJSON();
      var hid = hotelito.id;

      hab.find({
        where: {
                hotelId: hid
            }
        }, function(err, habitaciones){
        if (err) callback(err);


        reserv.find({where: {
            desde: fecha
          }}, function (err, reservas) {
          if (err) callback(err);

          console.info(reservas);

          callback(libre);
        })


        });


    });

  }
}
