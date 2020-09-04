# TextMeARecipe
This is a web application made with Ruby on Rails and React which texts users recipes based on the ingredients they have in their fridge.

Here is a gif outlining the usage of the application:
![](ExampleofApp.gif)

Here is the start page:

To begin create an account on twilio and clone the project and then open the project on any code editor. 
From here go to TextMeARecipe/myserver/app/models/users.rb in this file fill in the account_sid, auth_token and twilio number from the twilio dashboard and press save.

In order to start the app first clone the project and cd into the myserver folder in the command line. From here run bundle install then run rails db:migrate
and finally run rails s. This will start the server for the REST API made with Ruby on Rails

Then create a new terminal and go to the myclient directory. Here make sure to set the port location to 5000.
From here run npm install and then run npm start and then the client should be running. 

After this step the full app is complete and ready to be used!
