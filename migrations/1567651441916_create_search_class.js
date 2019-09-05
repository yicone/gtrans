module.exports.up = (q) => {
	return q.CreateCollection({ name: 'Search' })
}

module.exports.down = (q) => {
	return q.Delete(q.Collection('Search'))
}
