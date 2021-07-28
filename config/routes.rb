Rails.application.routes.draw do
  post 'sign_up', to: 'user#create'
  post 'sign_in', to: 'user#authenticate'
  resources :trails
end
