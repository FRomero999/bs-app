var temporal_data = []

function findAll(){
    return temporal_data
}

function add(data){
    temporal_data.push(data)
}

function removeAt(id){
    temporal_data=temporal_data.splice(pos,1)
}

module.exports = {
    findAll,
    add,
    removeAt
}
