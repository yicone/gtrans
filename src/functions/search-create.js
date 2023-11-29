import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

export const handler = (event, context, callback) => {
  console.log(event.body)
  const data = JSON.parse(event.body)
  console.log('Function `search-create` invoked', data)
  return client
    .query(q.Create(q.Ref('classes/Search'), { data }))
    .then((response) => {
      console.log('success', response)
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      })
    })
    .catch((error) => {
      console.log('error', error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      })
    })
}
