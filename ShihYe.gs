function doPost(e) {

  var CHANNEL_ACCESS_TOKEN = '';
  var msg = JSON.parse(e.postData.contents);
  console.log(msg);
  
  var replyToken = msg.events[0].replyToken;
  var userMessage = msg.events[0].message.text;
  var translatedOutput = LanguageApp.translate(userMessage, "zh", "en")

  if (typeof replyToken === 'undefined')
    return;
  

  var url = 'https://api.line.me/v2/bot/message/reply';
  
  var header = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  }

  var payload = {
    'replyToken': replyToken,
    'messages' :  [{
        'type': 'text',
        'text': translatedOutput,
      }]
  }
  
  var options = {
    'headers': header,
    'method': 'post',
    'payload': JSON.stringify(payload)
  }
  
  UrlFetchApp.fetch(url, options);
}