const dogs = []

function add(dog) {
	dogs.push(dog)
}

function getAll() {
	return dogs
}

module.exports = {
	add,
	getAll
}
