swagger: '2.0'
securityDefinitions:
  a:
    type: oauth2
    authorizationUrl: javascript:alert(document.domain)//
info:
  version: "0.0.1"
  title: Example Title
  description: html inject <img src=image.png/>
paths:
  /:
    get:
      responses:
        200:
          description: Successful response