# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Rails Bog App

| Objectives |
| :--- |
| Review **CRUD** in the context of a Rails application, especially **update** and **delete**. |
| Implement **form helpers** in a  Rails application. |

Researchers are collecting data on a local bog and need an app to quickly record field data. Your goal is to create a **Bog App**. 

## Background

> A bog is a mire that accumulates peat, a deposit of dead plant material — often mosses.

You may hear bog and think of Yoda and Luke...

![](https://cloud.githubusercontent.com/assets/7833470/11500466/211c115a-97e2-11e5-9b7f-9fc900023d8d.jpeg)

Or maybe Sir Didymus and The Bog of Eternal Stench...

![](https://cloud.githubusercontent.com/assets/7833470/11500467/212e3c7c-97e2-11e5-9256-ca7e28cf6941.gif)

## CRUD and REST Reference

REST stands for **REpresentational State Transfer**. We will strictly adhere to RESTful routing for Rails resources, and Rails sets up a lot of it for us.

| Verb | Path | Action | Used for |
| :--- | :--- | :--- | :--- |
| GET | /creatures | index | displaying list of all creatures |
| GET | /creatures/new | new | displaying an HTML form to create a new creature |
| POST | /creatures | create | creating a new creature in the database |
| GET | /creatures/:id | show | displaying a specific creature |
| GET | /creatures/:id/edit | edit | displaying an HTML form to edit a specific creature |
| PUT or PATCH | /creatures/:id | update | updating a specific creature in the database |
| DELETE | /creatures/:id | destroy | deleting a specific creature in the database |

## Part I: Display all creatures with `index`

#### 1. Set up a new Rails project

Create a new rails project called `rails_bog_app`


Your app should be up and running at `localhost:3000`.


#### 2. Define the `root` and creatures `index` routes

In Sublime, open up `config/routes.rb`. Inside the routes `draw` block, erase all the commented text. It should now look exactly like this:

```ruby
#
# config/routes.rb
#

Rails.application.routes.draw do

end
```

Your routes tell your app how to direct **HTTP requests** to **controller actions**. Define your `root` and creatures `index` routes as follows:

```ruby
#
# config/routes.rb
#

Rails.application.routes.draw do
  root "creatures#index"

  # use the resources method to have Rails make an index route for creatures
  resources :creatures
end
```

In the Terminal, running `rails routes` will list all your routes. You'll see that some routes have a "prefix" listed. These routes have associated route helpers, which are methods Rails creates to generate URLs. The format of a route helper is `prefix_path`. For example, `creatures_path` is the full route helper for `GET /creatures` (the creatures index). We often use route helpers to generate URLs in forms, links, and controllers.

#### 3. Set up the creatures controller and `index` action

Run the following command in the Terminal to generate a controller for creatures:

```zsh
➜  rails g controller creatures index show edit new
```

Next, define the `creatures#index` action in the creatures controller:

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  # display all creatures
  def index
    # get all creatures from db and save to instance variable
    @creatures = Creature.all
  end

  def show
  end

  def new
  end

  def edit
  end

end
```

#### 4. Set up the creature model

Run the following command in the Terminal to generate the `Creature` model:

```zsh
➜  rails g model creature name description
```

Run the migration to update the database with this change:

```zsh
➜  rails db:migrate
```

#### 5. Create a creature

In the Terminal, enter the Rails console. The Rails console is built on top of `irb`, and it has access to your Rails project. Use it to create a new instance of a creature.  If you want to, you can use `pry` to do the same thing but with prettier printing in the console along with some other useful tools.  To install `pry` add `gem 'pry'` to your Gemfile and run `bundle install`.  This is not needed, but can be helpful down the road!

```zsh
➜  rails c
irb(main):001:0> Creature.create({name: "Yoda", description: "Little green man"})
```

#### 6. Seed your database

When you create an application in development, you typically want some mock data to play with. In Rails, you can just drop this into the `db/seeds.rb` file.

Back in VSCode, add some seed data to `db/seeds.rb`:

```ruby
#
# db/seeds.rb
#

Creature.create({name: "Luke", description: "Jedi"})
Creature.create({name: "Darth Vader", description: "Father of Luke"})
```

In the Terminal (not inside rails console!), run `rails db:seed`. Note that the seeds file will also run every time you run `rails db:reset`, which will reset your database.

#### 7. Set up the creatures `index` view

If you look inside the `app/views` directory, the `/creatures` folder has already been created (this happened when you ran `rails g controller creatures index show new edit`). It also added an `index.html.erb` file to the `app/views/creatures` folder (and a view for the others methods too!)

Inside your creatures index view, iterate through all the creatures in the database, and display them on the page:

```html
<!-- app/views/creatures/index.html.erb -->

<% @creatures.each do |creature| %>
  <p>
    <strong>Name:</strong> <%= creature.name %><br>
    <strong>Description:</strong> <%= creature.description %>
  </p>
<% end %>
```

Go to `localhost:3000` in the browser. What do you see on the page?

## Part II: Make a creature with `new` (form) and `create` (database)


#### 1. Set up the creatures `new` action

When a user sends a GET request to `/creatures/new`, your server will search for a `creatures#new` action, so you need to create a controller method to handle this request. `creatures#new` should render the view `new.html.erb` inside the `app/views/creatures` folder.

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  ...

  # show the new creature form
  def new
    @creature = Creature.new
  end

end
```

#### 3. Set up the view for the new creature form

The generator the view `new.html.erb` inside the `app/views/creatures` folder. On this view, users should see a form to create new creatures in the database.

```html
<!-- app/views/creatures/new.html.erb -->

<%= form_for :creature, url: "/creatures", method: "post" do |f| %>
  <%= f.text_field :name %>
  <%= f.text_area :description %>
  <%= f.submit "Save Creature" %>
<% end %>
```

**Note:** The URL you're submitting the form to is `/creatures` because it's the database collection for creatures, and the method is `post` because you're *creating* a new creature.

Go to `localhost:3000/creatures/new` in the browser, and inspect the HTML for the form on the page. `form_for` is a "form helper", and it generates more than what you might guess from the `erb` you wrote in the view. Note the `method` and `action` in the form


#### 4. Set up the creatures `create` action

The `POST /creatures` maps to the `creatures#create` controller action, so the next step is to define the controller method to handle this request. `creatures#create` should add a new creature to the database.  Let's also set up a private method for accessing the params.

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  ...

  # create a new creature in the database
  def create

    # create a new creature from `creature_params`
    @creature = Creature.create(creature_params)
    # redirect to route that displays all creatures
    redirect_to @creature
    # redirect_to @creature is equivalent to:
    # redirect_to "/creatures/#{creature.id}"
  end

  private

  # whitelist params and return them in a method:
  def creature_params 

    params.require(:creature).permit(:name, :description)
  end
end
```


#### 5. Define the routes, methods and views to `show` a specific creature

With `resources :creatures` in routes file, we already have our show route ready to go (you can remind yourself of this using `rails routes` in the rails console)

set up the controller action for `creatures#show`:

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  ...

  # display a specific creature
  def show
    # get the creature id from the url params, then use the Creature model to return that id and save it to the instance variable @creature

    @creature = Creature.find_by_id(params[:id])
  end

end
```

Next, create the view to display a single creature:

```html
<!-- app/views/creatures/show.html.erb -->

<h3><%= @creature.name %></h3>
<p><%=@creature.description %></p>
```



## Part III: Change a creature with `edit` (form) and `update` (database)

Editing a specific creature requires two methods:

* `edit` displays a form with the existing creature info to be edited by the user
* `update` changes the creature info in the database when the user submits the form



#### 1. Set up the creatures `edit` action

Using your `creatures#new` and `creatures#show` method as inspiration, you can write the `creatures#edit` method in the creatures controller:

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  ...

  # show the edit creature form
  def edit

    # use `creature_id` (taken from the params[:id]) to find the creature in the database
    # using ActiveRecord
    @creature = Creature.find_by_id(params[:id])

  end

end
```

#### 2. Set up the view for the edit creature form

Go to the  `edit.html.erb` view inside `views/creatures`. Jump-start the edit form by copying the form from `views/creatures/new.html.erb` into `views/creatures/edit.html.erb`:

```html
<!-- app/views/creatures/edit.html.erb -->

<%= form_for @creature do |f| %>
  <%= f.text_field :name %>
  <%= f.text_area :description %>
  <%= f.submit "Save Creature" %>
<% end %>
```

Go to `localhost:3000/creatures/1/edit` in the browser to see what it looks like so far.  Check the `method` and `action` of the form. Also look at the hidden input with `name="_method"`.  What is it doing? The Rails form helper knows to turn this same code into an edit form because you're on the edit page!

#### 4. Set up "update" in routes, controller, views

Run `rails routes` to see all routes available to you.  We're all set with the `update` route thanks to the `resources` helper in the `routes.rb` file~

#### 5. Set up the creatures `update` action

In the `CreaturesController`, define an `update` method:

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  ...

  # update a creature in the database
  def update
 
    # use `creature_id` (tkane the params[:id]) to find the creature in the database
    # and save it to an instance variable
    @creature = Creature.find_by_id(params[:id])

    # update the creature using the whitelisted params in the private method `creature params`
    @creature.update(creature_params)
    
    # redirect to show page for the updated creature
    redirect_to @creature
    # redirect_to @creature is equivalent to:
    # redirect_to "/creatures/#{creature.id}"
  end

end
```

Test your `creatures#update` method in the browser by editing the creature with an `id` of 1 (go to `localhost:3000/creatures/1/edit`).

## Part IV: Delete a creature with `destroy` (database)

#### 1. Define a route to `destroy` a specific creature

Following a similar pattern to our other routes, Rails `resources` will generate a route to `destroy` (delete) a specific creature based on its `id`. The RESTful route it creates is `DELETE /creatures/:id`.


Run `rails routes` in your Terminal to check the routes `resources` generated for you.


#### 2. Set up the creatures `destroy` action

In the `CreaturesController`, define an `destroy` method:

```ruby
#
# app/controllers/creatures_controller.rb
#

class CreaturesController < ApplicationController

  ...

  # delete a creature from the database
  def destroy

    # the parameter in the url again represents the same id of the creature we want to remove.  Let's find this creature and save it to an instance variable.

    @creature = Creature.find(params[:id])

    # destroy the creature
    @creature.destroy
    
    # redirect to creatures index
    redirect_to creatures_url
    # redirect_to creatures_url is equivalent to:
    # redirect_to "/creatures"
  end

end
```

#### 3. Add a delete button (new!)

Add a delete button to the view that displays a single creature:

```html
<!-- app/views/creatures/show.html.erb -->

<h3><%= @creature.name %></h3>
<p><%=  @creature.description %></p>
<%= button_to "Delete", @creature, method: :delete %>
```

Visit `localhost:3000/creatures/1` in the browser, and inspect the HTML for the delete button. Click the delete button to manually test this feature.

At this point, you've created all the RESTful routes, implemented controller actions for each route, and made views for `index`, `show`, `new`, and `edit`. You've also created the `Creature` model in the database and manually tested that everything works.



## CONGRATULATIONS! You have created a Bog App! Take a break, you look *Swamped*!

![](https://cloud.githubusercontent.com/assets/7833470/11501240/83536030-97e7-11e5-8060-fa7666de7165.jpeg)
