module.exports.up = (q) => {
	return q.CreateIndex({
		name: 'all_Engines',
		source: q.Collection('Engines')
	})
}

module.exports.down = (q) => {
	return q.Delete(q.Index('all_Engines'))
}
