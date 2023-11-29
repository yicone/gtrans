var enginesData = require('../config/engines-data.json')

module.exports.up = (q) => {
  return q.Map(enginesData, q.Lambda('engine', q.Create(q.Collection('Engines'), { data: q.Var('engine') })))
}

module.exports.down = (q) => {
  return q.Map(q.Paginate(q.Match(q.Index('all_Engines'))), q.Lambda('engine', q.Delete(q.Var('engine'))))
}
