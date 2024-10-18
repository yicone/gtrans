'use strict'
import axios from 'axios'

export const handler = async (event) => {
  let { sl = 'en', tl = 'zh-CN', q } = event.queryStringParameters

  var translate_url = `https://translate.google.com.hk/?sl=${sl}&tl=${tl}&text=${q}&op=translate`
  console.log(translate_url)
  var encodedUrl = encodeURI(translate_url)
  let response = await axios.get(encodedUrl, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
    },
    proxy: {
      host: '127.0.0.1',
      port: 7890,
    },
  })
  console.log(response.data)
  var obj = eval(response.data)
  var r = obj[0][0][0]
  console.log('trans result:', r)
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': 'true',
    },
    body: r,
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
