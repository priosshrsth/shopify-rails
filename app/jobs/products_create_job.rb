class ProductsCreateJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Slack::postText(args)
  end
end
