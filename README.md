# NROK LISTENER
This is a very simple [ExpressJS](https://expressjs.com/) boilerplate app that allows us to listen to POST requests with `plain/text` content type. Its main purpose was to allow a quick and easy way to add an HTTP/HTTPS subscription to an SNS topic in AWS.

## Requirements
- ngrok installed => [installation instruction](https://dashboard.ngrok.com/get-started/setup)  
- npm installed => [npm intro](https://docs.npmjs.com/getting-started)  
- NodeJS installed => [official site](https://nodejs.org/en/)  
- install dependencies => run `npm install` from the root of this project  

## Listen To Events
### Start the app
Run `node app.js` from the terminal. Expect an output, such as  
```
laszlobalogh: 2021-04-21.17:54:01 ~/Documents/ibotta/development/ngrok_listener > node app.js
Example app listening at http://localhost:3000
```
Make sure to take note of the localhost port number => `3000` from the example above
### Connect SNS Topic to the App Running Locally
1. Start `ngrok` instance mapping to the instance of the app running locally:  
    ```
    ./ngrok http http://localhost:3000
    ```
2. From the `ngrok` terminal output, copy the https url to the clipboard
3. Go to the SNS topic in the AWS Console
4. Select the `Subscriptions` tab
5. Click on `Create subscription`
6. From the protocol select `HTTPS` => an input field will appear
7. Paste the ngrok https url from step #2 into the `Endpoint` input field
8. Scroll to the bottom of the page and click `Create subscription`
9. Watch the app terminal output for an incoming message with the subscription URL (both the request header and body will be printed to the terminal) => see details about this step and what to look for in the [offical AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.prepare.html)
10. From the terminal output, copy the `SubscribeURL` value to the clipboard
11. Select your HTTPS subscription in the AWS Console by clicking on the radio button, then click on `Confirm subscription`
12. Paste the `SubscribeURL` value that you copied from step #10
13. Click `Confirm`
14. Now you should see in the terminal the messages which were published to the SNS topic

## IMPORTANT
### ngrok url
With a free account, you will get a new, randomly assigned url each time you will restart ngrok. That means you will have to go through the SNS topic subscription process each time. So be mindful about that!!!
### Clean Up Your SNS Topic Subscrption
Once done with your evaluation, make sure to delete your SNS topic subscription. Make sure you ONLY DELETE THE SUBSCRIPTION(S) YOU CREATED FOR THIS TESTING!!!