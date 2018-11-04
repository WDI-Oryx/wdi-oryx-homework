Rails.application.routes.draw do 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   get "/home", to: "pages#home"
    # Make this route work!

    get "/books", to: "books#index"

    get "/books/:title", to: "books#show"
end

