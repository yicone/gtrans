import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  var pageHelper = client.paginate(q.Match(q.Index('all_Engines')))

  var r = pageHelper
    .map((ref) => q.Get(ref))
    .each((data) => {
      var response = data.map((_) => _.data)
      return callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          /* Required for CORS support to work */
          'Access-Control-Allow-Origin': '*',
          /* Required for cookies, authorization headers with HTTPS */
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(response)
      })
    })
    .catch((error) => {
      console.log('error', error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
