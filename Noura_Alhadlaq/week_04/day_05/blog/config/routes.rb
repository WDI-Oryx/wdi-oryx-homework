Rails.application.routes.draw do
  get "welcome/index"

  resources :articles

  root "welcome#index"

  resources :articles do
    resources :comments
  end

  
end
