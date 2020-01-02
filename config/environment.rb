# Load the Rails application.
require_relative 'application'

Rails.application.configure do
  URL = ENV.fetch('APP_URL', 'http://localhost:3000').chomp('/')

  if(!URL.start_with?('http'))
    if (URL.start_with?('localhost'))
      URL = 'http://' + URL
    elsif
    URL = 'https://' + URL
    end
  end

  ENV.store('APP_URL', URL)
  config.hosts << URL.gsub(/(http:\/\/|https:\/\/)(.*)/, '\2')
end
# Initialize the Rails application.
Rails.application.initialize!
