Rails.application.routes.draw do
  resources :artists, :paintings, :categories
end
