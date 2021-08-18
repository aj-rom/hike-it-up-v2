# Hike It Up v2
The reincarnation of [hike-it-up](https://hike-it-up.herokuapp.com), a simple sinatra hiking trail sharing application. 

## Localized Setup

### Requirements

#### Ruby Version & Gem Requirements
Ruby version **2.6.1** is required to run this application.
And must have the [bundler](https://bundler.io/) gem installed.

#### PostgreSQL
I recommend using the latest server version of PostgreSQL, but this must be installed on your system or our databases will not work.

You can find steps on the installation process [here](https://www.postgresql.org/download/).

### Setup

1. Clone this repository
2. Move into this repository. `cd hike-it-up-v2`
3. Install packages with yarn. `yarn install`
4. Run `yarn start`, this will start the frontend website at https://localhost:3000
6. To get our backend up and running open a new terminal session and move to the backend directory. `cd backend`
7. Run `bundle install && rails db:setup`
8. And finally to start our backend server run `rails s` which will be hosted at https://localhost:3001

#### Important
Check out the seed file for the default user login!


### TODO
* Add destroy button for trail owners (frontend)
* Add edit page for owners of trail (frontend)
  * Handle auth-token and update (backend)
* HOST TO HEROKU
* Finish :)