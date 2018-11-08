Rails.application.routes.draw do
  get 'stories/index'
  get 'stories/show'
  resources :authors,:stories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
