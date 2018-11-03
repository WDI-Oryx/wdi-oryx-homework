## Cheese: Straight CURDin'

![image](https://media.giphy.com/media/332SpoiZo7ToI/giphy.gif)

You all already know how to CRUD. Tonight, you learn to *CURD* (takes off sunglasses).

#### Completion
Please finish through __Part 7__.

#### Part 1: Setup

Create a new Rails app using the following command:

```bash
rails new straight_curdin --skip-git
```

Now to set up your database of `cheeses`

To create the database, run:

`rails db:create`

To create a table of cheeses, you need to run:

`rails generate model Cheese name:string milk_type:string description:string image_url:string`


After you check your migration file, run:

`rails db:migrate`

Time to seed some test data! Copy the contents of `curding_seeds.rb` into your `db/seeds.rb` file.

Now you can run the seeds with:

`rails db:seed`

Now in your `config/routes.rb` file, call the `resource` method to auto generate all of your cheese resource routes. You're now ready to start CURD'in.

#### Part 2: The Great Hall of Cheeses

Fulfill the following specification:

- GET requests to '/' should forward to `/cheeses`, and should have a heading that says, "The Great Hall of Cheeses", followed by an unordered list of links to cheeses, i.e. `/cheeses/1`, `/cheeses/2`, `/cheeses/3`, and so on.

#### Part 3: "One Cheese at a Time, Bruh!"

- GET requests to `/cheeses/1` should display the `name`, `milk_type`, `description`, and image (via `image_url`) of the cheese with the id of 1, while GET requests to `/cheeses/7` should display the information of the cheese with the id of 7.

#### Part 4: Putting the C in "CURD"

Fulfill the following specification:

- GET requests to `/cheeses/new` should take the visitor to a form for creating a new cheese.
- When the user submits the form, a new cheese is created in the database, and the user is redirected to The Great Hall of Cheeses. If all has gone according to plan, the newly created cheese should will show up in the list.
- Use form helpers to generate your forms

#### Part 5: Eat the Cheese, You Fool

Head back to the template for The Great Hall of Cheeses. Update it using form helpers (maybe a `link_to()` with `delete` somewhere inside? `;-)`) so that each cheese has a button beside it that says "Eat This Cheese", and clicking on that button removes the appropriate cheese from the database. The user should then be redirected to The Great Hall of Cheeses. If all has gone according to plan, the cheese you chose to destroy will not show up on the list.

#### Part 6: If Rocky Can Change, and the Soviet Hordes Can Change, So Can Cheese

Head back to the cheese's "show" template, and add a link to `/cheeses/THE_ID_OF_THE_CHEESE_IN_QUESTION/edit`. Clicking this link should take you to a `form_for` editing the information for a particular cheese. The form's fields should be pre-populated with the values of the cheese. When the user submits this form, the changes to the cheese should be persisted to the database, and the user should be redirected to that cheese's "show" page. If all has gone according to plan, the changes you made to the cheese will be reflected on the cheese's show page.

#### Part 7: Welcome to the Limburger Zone

We want to add a column for `stank_level` to our `Cheeses` table. It should be an integer with a default value of 0. Generate and run the migration to make this happen. What happened to the original cheese data? Update your routes to reflect this change.

#### Part 8: Reading
Please read through [this page](https://guides.rubyonrails.org/association_basics.html)



![image](https://media.giphy.com/media/d2ZjaGbfqN2wjBFm/giphy.gif)

**Have a great long weekend!**