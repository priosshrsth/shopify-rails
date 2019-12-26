class ApplicationController < ActionController::Base
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
end
