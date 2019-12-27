# frozen_string_literal: true

class ShopifyController < AuthenticatedController
  skip_before_action :verify_authenticity_token, :only => [:cart]

  def index
    @products = ShopifyAPI::Product.find(:all, params: { limit: 10 })
    @webhooks = ShopifyAPI::Webhook.find(:all)
  end

  def modify_theme
    @assets = ShopifyAPI::Asset.find(:all)
    # @bin
    # @cartTemplate= ShopifyAPI::Asset.find('sections/cart-template.liquid')
    # @cartTemplate.value.sub!('<div class="cart__buttons-container">', '<div class="cart__buttons-container">Your Additionall Code Here')
    # @cartTemplate.save
    render json:@assets
  end

  def cart
    respond_to do |format|
      format.js {render layout: false}
    end
  end

  def custom_cart
    @products = ShopifyAPI::Product.find(:all, :params => {:limit => 10})
    render :cart
  end
end
