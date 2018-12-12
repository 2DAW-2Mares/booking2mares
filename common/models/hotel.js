'use strict';

module.exports = function(Hotel) {
  Hotel.afterRemote('create', function (context, hotel, next) {
    var habitaciones = Hotel.app.models.Habitacion;
    habitaciones.create([{
        numero: '101',
        categoria: 'Individual',
        precio: '60'
      }, {
        numero: '102',
        categoria: 'Doble',
        precio: '75'
      }, {
        numero: '103',
        categoria: 'Suite',
        precio: '100'
      }]);
    next();
  });
};
