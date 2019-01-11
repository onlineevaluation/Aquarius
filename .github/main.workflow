workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm-4"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm i npm@latest -g"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["GitHub Action for npm"]
  runs = "npm install -g @angular/cli"
}

action "GitHub Action for npm-2" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["GitHub Action for npm-1"]
  runs = "npm install -g firebase-tools"
}

action "GitHub Action for npm-3" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["GitHub Action for npm-2"]
  runs = "ng build --prod"
}

action "GitHub Action for npm-4" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["GitHub Action for npm-3"]
  runs = "firebase deploy --token $FIREBASE_TOKEN"
}
