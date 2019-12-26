class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, :only => [:cart]
  handle_api_errors(backtrace: true)

  def index
    @data = {
      user: {
        name: 'Dante Spardason',
        age: 28,
        address: 'Dhulikhel - 3'
      }
    }
  end

  def product_added
    Slack::postText(params)

    render json: params
  end

  def cart
    respond_to do |format|
      format.js { render :template => 'shopify/cart.js.erb', layout: false}
    end
  end

end
