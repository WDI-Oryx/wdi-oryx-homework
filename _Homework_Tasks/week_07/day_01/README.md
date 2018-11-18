1. Create a Heroku account [from here](https://signup.heroku.com/)
2. cd to your app
3. `git add .`
4. `git commit -m "mesage`
5. Install the Heroku Cli
    1. Mac --> brew install heroku 
    2. Windows --> sudo apt-get install heroku
    3. Login using Cli `heroku login`
6. `heroku create`
7. `git push heroku master`
8. Migrate your database `heroku run rake db:migrate`
9. `heroku open`