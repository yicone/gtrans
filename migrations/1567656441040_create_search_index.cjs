module.exports.up = (q) => {
	return q.CreateIndex({
		name: 'all_Search',
		source: q.Collection('Search')
	})
}

module.exports.down = (q) => {
	return q.Delete(q.Index('all_Search'))
}
