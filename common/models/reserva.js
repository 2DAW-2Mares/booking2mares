'use strict';

module.exports = function(Reserva) {
  Reserva.afterRemote('create', function (context, reserva, next) {
    var desde = context.args.data.desde;
    var hasta = context.args.data.hasta;
    if(desde>hasta){
        /*Suelta internal server error y manda el mensaje al terminal*/
        throw"La fecha de inicio de la reserva no puede ser menor"
    }
    next();
  });
  
  /**
 * Devuelve las habitacion que no tengan reserva actualmente
 * @param {Function(Error, array)} callback
 */
/* No funciona el 7
Reserva.primeraLibre = function(callback) {
  var libres=[];
  var habitaciones = Reserva.app.models.Habitacion;
  var hoy = Date.now();
  habitaciones.forEach(function(habitacion){
  Reserva.forEach(function(reserva){
      var desde=reserva.desde;
      var hasta=reserva.hasta;
      if(reserva.habitacioId == habitacion.id){
          if(desde<=hoy && hasta=> hoy){
          
      }else{
          libres+=habitacion;
      }
      }
      
  });
  });
  
  callback(null, libres);
};
*/
};
