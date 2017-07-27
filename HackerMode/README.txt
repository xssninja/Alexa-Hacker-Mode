(`-').-> (`-')  _           <-.(`-')  (`-')  _   (`-')     <-. (`-')             _(`-')    (`-')  _ 
 (OO )__  (OO ).-/  _         __( OO)  ( OO).-/<-.(OO )        \(OO )_      .->  ( (OO ).-> ( OO).-/ 
,--. ,'-' / ,---.   \-,-----.'-'. ,--.(,------.,------,)    ,--./  ,-.)(`-')----. \    .'_ (,------. 
|  | |  | | \ /`.\   |  .--./|  .'   / |  .---'|   /`. '    |   `.'   |( OO).-.  ''`'-..__) |  .---' 
|  `-'  | '-'|_.' | /_) (`-')|      /)(|  '--. |  |_.' |    |  |'.'|  |( _) | |  ||  |  ' |(|  '--.  
|  .-.  |(|  .-.  | ||  |OO )|  .   '  |  .--' |  .   .'    |  |   |  | \|  |)|  ||  |  / : |  .--'  
|  | |  | |  | |  |(_'  '--'\|  |\   \ |  `---.|  |\  \     |  |   |  |  '  '-'  '|  '-'  / |  `---. 
`--' `--' `--' `--'   `-----'`--' '--' `------'`--' '--'    `--'   `--'   `-----' `------'  `------'

WELCOME TO HACKER MODE, the Amazon(tm) Echo(tm) "Alexa(tm)" skill designed just for hackers by David Cross (and hopefully by you...)

I hope you will join in being one of the creators that makes Hacker Mode take over the world and hack it at the same time...

THIS PROJECT CREATES AN AMAZON ALEXA SKILL APP. So you can say "Alexa, hacker mode" and then ask her a series of questions about encodings, or command line help for programs like Metasploit(tm), Nmap, NetCat. Like: "How do you do a services fingerprint scan with Nmap?" Or "What is the HTML encoding for double-quote?" etc. 

The app will be submitted for free public use, but if you want to use it now, or contribute to it, you need to create an Alexa Skills developer account to put the skill invocation examples JSON, and a AWS account for the program logic in the form of a NodeJS app encapsulated in JSON for Lambda. And of course, you'd need to have a Tap, Dot, Echo or CoWatch watch. The links will be provided below for the Amazon sites.

GOOD! You haven't been scared off yet. Keep reading if you dare...

=================
The origin story \
======================================================================================================
This project was created for myself as a means for assisting me in my day to day work. I'm a full time red-team hacker and recently I was told by my doc that I was going to lose some sight in one eye. It made me think, wow, it would probably be
useful to build some general tools into Alexa so I don't have to have a Google window always open while I'm working... and Alexa works well for asking and answering quick questions. As you may note, I went way beyond quick questions, but one does that when they're trying to take over the world.  Alexa is also handy for a little-known ability to send "card" data, or a little text version of what it answers for you which is nice for getting syntax detail that doesn't quite come across easily in speech. Rumor has it the new Echo's will have a screen on the front so cards will be displayed there as well as in the Alexa app.

I want to use it for more than just a syntax helper though, I want to expand it way, way beyond that... Eventually, I want to be able to ask it to hack things for me. While I have laid the groundwork for the crypto and CNC and authentication and linux scripting, it's something I would welcome help on.

Think... "I took the liberty of looking up that IP for you on Shodan, and pulled headers and cyphers. I found some interesting things... would you like to know the details? Or would you rather I sent that host to Metasploit?"

USE YOUR AMAZON ACCOUNT FOR DEV AND TESTING
One thing you should know before you proceed is that when you create an Alexa skill, it is not immediately published for the world, but is tied to your account. So USE YOUR ALEXA login, or whatever account you use to connect your Alexa as the account for the Alexa skill or your Alexa will never see the skill in her skill list.  By using the same login as you use for you Alexa account, you will automatically give any Alexa devices signed in with that same account access to the skill that you are building. For example: My family uses one account for our main Alexa (my Wife's account) and I use my Amazon account for Alexa skills development, Lambda development, and to connect my Tap and to connect my watch - so the Hacker Mode skill is automatically available on my devices but NOT on the family devices.

====================
What is Hacker Mode? \  (the name of the project and the name to invoke the Alexa skill)
======================================================================================================

Hacker Mode is a collection of Node.JS code and JSON that builds two important pieces of a whole:

1) An Alexa Skill (a set of lists that describe how to talk to a Lambda expression)
2) A Lambda expression (a Java Script that consumes a JSON representing a voice request)


1) The Alexa Skill is comprised of:
	INTENTS - (what categories of things the user may want to do) 
		This file includes JSON to describe what TYPES of things can be asked.
		It also references the list of items that provide the subject of the question.

	SAMPLE UTTERANCES - (examples of things that can be asked)
		This file is a list of ways the user can phrase questions which include items.

	ITEM LISTS - (slot types are specific topics Alexa will provide answers for) 
		These files are lists of words or phrases that should be recognized.

2) The Lambda expression is currently composed of only one file:
	Hacking.js which is your Lambda expression that will respond to Alexa voice requests.

==============================
App Structure and First Steps \
======================================================================================================
I have broken out the files into Two directories to match the basic structure (Lambda and AlexaSkill)  The interesting thing is that these two pieces of an Alexa app are in fact created and tested IN TWO SEPARATE WEB SITES!  

******************************************************************************************************
You create your Alexa Skill in: https://developer.amazon.com/edw/home.html#/skill/
  Log in there create an Alexa function named HackerMode
  Enable the Beta Skill builder
  In the SkillBuilder portion of the web site click on the "code" and paste in the HackerModeIntents.json contents into the coding area.
  Save and Build the "Intent"

And create your Lambda expression in: https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/
  Log in there (should be the same account email and password)
  Create a Lambda expression using a template for a JSON Alexa app (I think it's the color picker example)
  Paste in the Hacking.js contents and name your function fnHackerMode or whatever.
  Make sure your function has a role set for it. (AWS guides you through creating a basic role to run it)

You have to make sure the ARN for the Lambda is entered into the Alexa Skill web site configuration for the skill portion.
That will help the skill's invocation go to the right place at AWS.

Once you have built your skill and connected it to the Lambda be sure to get the Alex app on your smart-phone, log into it, and under "my skills" add your newly minted skill. That enables it on your device or devices that exist under that
account. (Again, note, the account apparently has to be the same as the account you use to log into Alexa and into your
lambda and skills web sites. If not, your skill will exist but will not show up in the Alexa configuration app.) 
  
These instructions may vary from day to day as they are constantly changing and adding things. There are some good
YouTube videos on how to create and run a skill if you get stuck.

  
*************************************************************************************************************
I recommend before you start on your road to Alexa skill building that you use one of their built-in samples to get an idea of how it works. Bookmark both sites as you'll have them open a lot during development and you'll be cutting and pasting code into the sites. 

================
Getting Started \
=====================================================================================================
Once you have your feet wet, and have tested a "demo" skill on your Alexa device... From there, you can create a new skill and preferably call it Hacker Mode and drop the lambda code in on the AWS side and link the two with AWS Lambda ARN number that is generated when you create the Lambda expression. This basically marries the Alexa skill in the skills web site to the logic in your Lambda expression on the AWS site.

Amazon has some good tutorials (and free swag apparently):
https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-1?&sc_channel=SEM&sc_campaign=Fact-Skill&sc_detail=Branded&sc_segment=Alexa-Tutorial&sc_publisher=Google&sc_country=WW&sc_medium=SEM_Fact-Skill_Branded_Alexa-Tutorial_Google_WW_0007&sc_trackingcode=0007&gclid=CMOFndDV1dMCFViRfgodZrIDLQ

This one is not too bad: 
https://www.pluralsight.com/guides/node-js/amazon-alexa-skill-tutorial


When you start your Alexa it will pick up the list of skills from your account on the skills web site. The Intents, utterances in the JSON file tells Alexa how to assemble a JSON request that can be consumed and translated into something useful by the Lambda "program". Basically, when a request comes in, the Lambda server "wakes" the lambda logic and "runs" it on the incoming JSON. If the Intent is one that it has a function handler for, it will try to match the ITEM that comes in to a list of items in the lambda code and respond with whatever the prescribed answer is for that combination of INTENT and ITEM.

To shed more light on this: If you want Alexa to be able to answer the question "who's the greatest {talent} of all time?" you would break that down into an INTENT called: "TheGreatest"
You'd create a list of things to fill in the blank with ... like: hockey player, hacker, singer

You'd create a set of sample utterances using the Beta Skill Builder in the Alexa Skill web site. Then you'd tailor your Lambda expression code to match the {talent_list} named items like: hacker, singer, hockey player to your list of responses in your lambda's JavaScript code.  In this case I do it with a database built out of JSON objects and I have a row named for each possible option that includes a speech response and sometimes even also includes a text response.

Anyway, peek through the code and it will start making sense.  It really comes together once you've set up one of Amazon's provided demo projects like Favorite Color.

================
Further in Depth\
======================================================================================================

The heart of the Lambda expression is basically a program inside of a JSON object. Which is weird but bear with me. (We live in a JavaScript world)  JSON, for those that aren't familiar is a basically a less wordy version of XML. And as such, it can hold data in various forms.

The goal of the Lambda expression is to provide a means of accessing your answer data that Alexa will speak back, and to trip a function of the program or a "handler" to handle a specific INTENT type. So, going back to the example of the "TheGreatest" intent example, you'd have a function in Javascript within the Lambda expression that is tagged with that intent name. As the Lambda interpreter loads your expression and tries to match what is being asked with possible responses it sees there's a match and fires the logic of your function to respond to the incoming INTENT type and ITEM type. In this case INTENT is "TheGreatest" and ITEM is "hockey player". Your Lambda expression function will then look up in a data structure the answer for that query which is "Wayne Gretzky".

At the very bottom of the Lambda expression included in this project you'll notice a bunch of constants defined which determine the way JSON structures map to variables. The intent is not to make it more complicated, but rather to provide a means of mapping translations to the data structures into other languages. I gave up on that idea early on and hard coded the mappings. Eventually, when we get fancy, I want to separate out the JSON data definitions into separate files to make it easier to edit them. But for now I wanted to simplify the idea of what's happening and simplify the replacing of the Lambda expression with a simple copy and paste instead of uploading a structured zip file which is the only alternative.

=======================
What is Basically Done \
======================================================================================================
Mostly done are: 
 NetCat
 NMAP
 Metasploit
 Html Encodings
 Hex Encodings
 ASCII encodings
 URL encodings
 HTTP Headers lookup
 HTTP Verbs lookup
 TCP/UDP Ports (common)
 IP Lookup (GeoLoc)
 Rick Rolling 

 Upgrading the intent code to support the new Beta skill builder capability

======================
What Needs to Be Done \ 
======================================================================================================
I want to finish:
 all TCP/UDP ports
 HTTP response codes
 UU char encodes
 IP to IntegerIP value conversions 
 Powershell goodies
 WMIC commands
 Shodan lookup for an IP
 Lin/Win commands for basic user creation and system management
 *commands for every decent hacker tool out there like nCat an upgraded netcat with HTTPS support
 *commands for "living off the land" like creating a web server using OpenSSL :)
 ** commands for actually kicking off a scanning a local subnet target with nmap maybe on your own Kali
 *** a command language for auto-pwning local subnet systems which would require a CNC server with strong crypto and message verification.

In short, let's make this the new pen testing framework shall we?
When I think of where I want this to go, I want to get beyond just curiosity questions like what is the hex encoding for carriage-return, but get to weightier matters like:

"Alexa, Hacker Mode..."
	"Now in hacker mode..."
"autopwn 192.168.0.11 for me"
	"Are you sure you want to autopwn 192.168.0.11?"
"Yes, I'm sure."
	"You are now root on 192.168.0.11."
	"What would you like to do?  Copy files, scan a target or create a user?"

YOU GET THE IDEA!!! SKYNET without the guns and robots BASICALLY...

========================
How to Make that Happen \
=======================================================================================================
Of course you can't build into a Lambda function the logic to hack something and not end up in the slammer. Amazon is not stupid and they are not amused by people messing around with or in AWS! If you're going to be using this to launch pen-tests, do it from your machine where you have full responsibility for what happens. That doesn't mean you can't have a push out to a CNC server where you then pull down your voice requests onto your laptop and have your locally installed tools get busy on your network. (Yes, your network or a network where you have permissions to do scanning... again, without written permission to scan a network, you are just begging to go to jail.) 

So, build out responsibly, use your own branch and your own hardware for SKYNET.  

If you have a safe and responsible build-out, do a pull request and we'll consider mergining it into the main for all to enjoy.  If your branch is trying to do bad things from AWS or 3rd party servers we'll reject it.

If you submit code that requires a API call to another web site or web service for data we'd want to receive permission in writing to perpetually use that connection. Since that is extremely unlikely to ever happen in real life, we'll probably reject merges with features like that. If you want to add it to your own personal copy, we can't stop you but I think you'll find that companies think it's great to share until they don't... which could be any minute of any day they chose to stop the sharing and you find a huge bill show up in your mail for all the requests you made to WhatWasThatHackerTipOPedia.com for 100 million pennies worth of requests.

... Speaking of which, Amazon lets you have a free Lambda requests up to about a million I believe... your account with them will keep you updated on the status of what is free at the time you are working on it.  So far for me, in development, my requests have only totaled in the hundreds.  But, I'm sure the same principle applies, something is free until it isn't... and keep an eye on how long your Lambda expressions are taking. I'm sure Amazon wouldn't like one that takes a long time to complete. They'd probably start eyeing that for the "isn't free" bucket sooner than later.

==================
About the License \
======================================================================================================
Ok, I know it was kind of a controversial thing to put in a serious license instead of an easy one. My reasoning is this... I don't want us to go through a lot of work to build this out and have someone come in and make a crapload of money off of a free thing. Hopefully this project will serve as a means for gaining greater attention to the cause of Red Teaming and bug bounties generally, and if we ever decide to make it into more than that... I'm open to ideas!

@10rdV4d3r
David Cross 
superdave.cross@gmail.com






