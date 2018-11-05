Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get "/home", to: "pages#home"
    get "/contacts", to: "pages#contacts"
    get "/color/:color", to: "pages#color"
    #literal Route
    get "/users", to:"users#index"
    #Dynamic Route
    # get "/users/trevor", to: "users#show"
    get "/users/:username", to: "users#show"

    get "/posts", to: "posts#index"
    get "/posts/:title", to: "posts#show"

end
