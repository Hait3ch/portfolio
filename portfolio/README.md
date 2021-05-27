# Welcome to my Portfolio

# Getting started

### `npm i`

### `npm start `

### Run functions locally

Enable rules from firestore.rules
`firebase deploy --only firestore:rules`
`firebase emulators:start`

### TODO:

1. Teambuilder: Edit user
2. Teambuilder: Delete user hack fix
3. Teambuilder: Ask user for email or code to enable features
4. Rules: Related to 3. Configurate firebase rules

<!-- ### To deploy to Prod:

npm run build
firebase deploy -->

<!--
Alla oleva ohje löytyy myös notesista Portfolio projekti nimellä.

Teambuilder lokaalina: Katso TeamBuilder.js "handleSumbit"
Funktioiden deployaaminen, kun muokattu tai uusi funktio:

Inside portfolio
Npm run build
firebase deploy --only functions

-->

<!-- Tää ensin, kato mitä asetettu:

Get config of GMAIL
firebase functions:config:get

Palauttaa:
{
  "gmail": {
    "pass": "P...",
    "to": "hata @ gmail",
    "login": "chaze @ gmail.com"
  }
}

Testing purposes
firebase emulators:start



Set config of GMAIL
firebase functions:config:set gmail.login=test@gmail.com gmail.pass=pass -->

<!-- Aloita emulaattori lokaalina:

Kommentoi rivit: 8-41 nodemailer jutut
aja: firebase emulators:start
Avaa localhost:4002/functions ja localhost:4002/firestore

Voit muokata suoraan funktion koodeja ja ajaa niitä



https://firebase.google.com/docs/functions/local-emulator

export GOOGLE_APPLICATION_CREDENTIALS="path/to/key.json"

firebase emulators:start


https://console.cloud.google.com/iam-admin/serviceaccounts?project=portfolio-2798d&folder=&organizationId=&supportedpurview=project

https://firebase.google.com/docs/functions/config-env -->

<!-- ______DEPLOY RULES ONLY IN COMMAND LINE____

Change file firestorm.rules
Line 1: rules_version = '2';

firebase deploy --only firestore:rules -->
