### Deploy com o Heroku

- Instalação da CLI com npm `npm install -g heroku`
- Ver a versão da CLI do Heroku instalada `heroku --version`
- Fazer login na conta Heroku `heroku login`

3. Passo a Passo do Deploy (via CLI)
Logue no Heroku: `heroku login`
Inicie o Git (se ainda não fez):
`git init`
`git add .`
`git commit -m "Preparando para deploy"`
Crie a aplicação no Heroku:
`heroku create nome-da-sua-app` (O nome deve ser único).
Conecte em uma aplicação já existente:
`heroku git:remote -a nome-do-app`
Faça o deploy:
`git push heroku main` (ou master).
Abra a aplicação:
`heroku open`
Dicas Importantes:
Logs: Se der erro, use heroku logs --tail para depurar.
Variáveis de Ambiente: Configure configs sensíveis com heroku config:set CHAVE=valor.


  "engines": {
  "node": "18.x"
},
