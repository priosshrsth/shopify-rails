require 'httparty'
module Slack
  URL = 'https://hooks.slack.com/services/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'
  def self.postText(data)
    HTTParty.post URL, body: {"text" => data.to_s}.to_json, headers: {'content-type' => 'application/json'}
  end

end
