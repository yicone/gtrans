'use strict';
const axios = require('axios');

exports.handler = async event => {

  let { sl = 'en', tl = 'zh-CN', q } = event.queryStringParameters;

  var translate_url = `http://translate.google.cn/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`;
  console.log(translate_url);
  var encodedUrl = encodeURI(translate_url);
  let response = await axios.get(encodedUrl);
  console.log(response.data);
  var obj = eval(response.data);
  var r = obj[0][0][0];
  console.log("trans result:", r)
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': 'true'
    },
    body: r,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
