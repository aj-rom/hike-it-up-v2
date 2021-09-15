Rails.application.routes.draw do
  root to: 'trails#index'
  post 'sign_up', to: 'user#create'
  post 'sign_in', to: 'user#authenticate'
  get 'users/:id', to: 'user#show'
  delete 'users/:id', to: 'user#destroy'
  resources :trails
end
