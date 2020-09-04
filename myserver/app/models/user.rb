require 'twilio-ruby'
require 'json'
require 'rest-client'
class User < ApplicationRecord
    # these follwoing pieces of code ensure that all fields are filled out
    validates :name, presence: true
    validates :number, presence: true
    validates :body, presence: true
    # this function will remove whitespaces and will be used in creating the url 
    def cleanRecipeParams
        val = self.body.gsub(/\s+/, "")
        return val
    end
    # this function uses twilio and actually send the message
    def send_message(arg1, arg2)
        account_sid = 'AC5XXXXXXXXXXXXXXXXXXX' # place twilio sid here
        auth_token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX' # place twilio auth token here
        client = Twilio::REST::Client.new(account_sid, auth_token)
    
        from = '' # Your Twilio number
        to = arg1 # Your mobile phone number
    
        client.messages.create(
        from: from,
        to: to,
        body: arg2
        )

    end
    # this function will actually determine the recipe and then send the recipe to the users phone.
    def final_send
        all_recipes = RestClient.get("http://www.recipepuppy.com/api/?i=" + self.cleanRecipeParams)
        recipe = JSON.parse(all_recipes)["results"].to_a
        if recipe.length() == 0
            self.send_message(self.number, "Sorry could not find any recipes!")
        else
            val = "Here is what we found " + recipe[0]["href"]
            num = self.number.tr('()-', '')
            finalNum = num.gsub(/\s+/, "")
            self.send_message(finalNum, val)
        end
    end
end
