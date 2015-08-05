Rails.application.routes.draw do
  ACCEPTS_JSON = lambda { |request| 
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :pins, only: [:index, :create, :update, :destroy]
    resources :users, only: [:create]
    
    post '/login', to: 'sessions#login'

    post '/signup', to: 'users#create'

    get '/logout', to: 'sessions#logout'

    get '/session', to: 'sessions#show'

    get '/accepted_pin', to: 'sessions#accepted_pin'

    get '/dropped_pin', to: 'sessions#dropped_pin'

    get '/dropped_pin_accepted', to: 'sessions#dropped_pin_accepted'
  end

  get '*path', to: 'app#show'
  root to: 'app#show'

end
