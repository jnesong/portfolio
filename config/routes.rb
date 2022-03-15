Rails.application.routes.draw do

  namespace :api do  
    resources :journeys, only: [:index, :show, :create, :update, :destroy]
    resources :enneadrinks, only: [:index, :show]
    resources :records, only: [:index, :create, :update, :destroy]

    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end 

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later! Must be at the end so the * does not catch all.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
