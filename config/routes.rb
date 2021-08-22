Rails.application.routes.draw do
  root '/trails'
  post 'sign_up', to: 'user#create'
  post 'sign_in', to: 'user#authenticate'
  get 'users/:id', to: 'user#show'
  resources :trails
end
