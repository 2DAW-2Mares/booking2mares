'use strict';

module.exports = function(Hotel) {





Hotel.prototype.primeraLibre = function(callback) {
	var libre;
	var fecha=Date.now();
  
	this.habitaciones(function(err, habitaciones){
			

			habitaciones.forEach(function(habitacion){

					habitacion.reservas({where:{and:[{desde:{lt:fecha}},{hasta:{gt:fecha}}]}}, function(err, reservas){

								if(reservas.length==0){
								libre=habitacion;
								callback(libre);
								
								}
					});


			});


	});


};














Hotel.afterRemote('create', function(ctx, hotel, next){

var idHotel=hotel.id;

Hotel.app.models.Habitacion.create([{numero: 101, categoria: "Individual", precio: 60, hotelId: idHotel},
{numero: 102, categoria: "Doble", precio: 75, hotelId: idHotel}, 
{numero: 103, categoria: "Suite", precio: 100, hotelId: idHotel}

],function(err, habitaciones){ 

if (err) next(err);

next();

});




});




};
