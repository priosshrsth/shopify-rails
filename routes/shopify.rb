Rails.application.routes.draw do
  scope :shopify do
    get '/', :to => 'shopify#index'
    # get '/login' => 'admin#show_login', as: :login_form
    # post '/login' => 'admin#login', as: :login_admin

    get 'install_cart', to: 'shopify#modify_theme'
    get 'cart', to: 'application#cart'
    match "*any", to: "application#index", via: :all
  end
end
