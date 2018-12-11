'use strict';

module.exports = function(app) {
  if (process.env.AUTOMIGRATE) {
    var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    app.dataSources.db.autoupdate(lbTables, function(er) {
      if (er) throw er;
      console.log('Loopback tables [', lbTables, '] created in ', app.dataSources.db.adapter.name);
      var booking2maresTables = ['Hotel','Habitacion"','Reserva','Usuario'];
      app.dataSources.db.autoupdate(booking2maresTables, function(er) {
        if (er) throw er;
        console.log('Loopback tables [', booking2maresTables, '] created in ', app.dataSources.db.adapter.name);
      });
    });
  }
};
