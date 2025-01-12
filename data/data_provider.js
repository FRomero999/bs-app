var temporal_data = [
    { "name": "Juan Pérez", "email": "juan.perez@example.com" },
    { "name": "Ana García", "email": "ana.garcia@example.com" },
    { "name": "Carlos López", "email": "carlos.lopez@example.com" },
    { "name": "María Rodríguez", "email": "maria.rodriguez@example.com" },
    { "name": "Luis Fernández", "email": "luis.fernandez@example.com" }
  ]
  

function findAll(){
    return temporal_data
}

function add(data){
    temporal_data.push(data)
}

function removeAt(pos){
    temporal_data.splice(pos,1)
}

module.exports = {
    findAll,
    add,
    removeAt
}
