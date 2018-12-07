* Server middleware (spa)
* create scripts
  * install on client and server
  * build client and server
  * start server
* create heroku add
* add app to travis
* cd with travis
  * encrypt heroku api key
  * add deploy to .travis.ym

[travis setup](https://docs.travis-ci.com/user/deployment/heroku/)


## PRs

* Branches have meaningful names `fix/links-not-rendering-on-home-id-1`
* PRs have meaningful titles
* PRs have meaningful descriptions
* Squash and merge
* Require tests to pass
* at least 1 reviews
* PR creater merges PR

## Testing

* Unit tests with `src`
* integration/e2e tests in `tests` folder
* `testHelper.js`
  * connect to database in helper file
  * drop databases from helper file
  * Use models to create seed/fixture data (e.g. `User.create`)
  * create easy to use getters (e.g. `getUser` and `getUsers`)
  * add other common functions to test helpers (e.g. check status code)
* Work to make tests easy to read

## Pitch

* Features
  * What are your user stories
  * How will you test these?
* Models
  * What collections will you need?
  * What shape will documents take?
  * What aggregate will you need?
* API routes
  * what endpoints will you need?
  * what db queries will you need to make?
  * what data does your front-end need
* Components
  * Architecture
  * Front-end routes
  * Higher-order components
