D7: Verification and Validation

System Description: 

In this system, users can login. Game Masters(GMs) can document notes in their journal to keep track of any pertinent information related to the game world and it’s characters. Players also have the ability to create a character for their GMs to keep track of. GMs also have a dice roller with all the relevant dice to play any TTRPG that comes with six sets of dice. GMs also have the option to generate both characters and monsters for use in their game world.  Lastly Cosmos Smithy houses an initiative tracker that keeps track of the order of characters when the game breaks out into turn based combat. These all allow the GM to better keep track of their game and the players progress inside of it. 

Unit test: 
Framework Used: Jest and Enzyme
Github Link: https://github.com/bmvisoky/CosmosSmithy/blob/bmvisoky/src/App.test.js
Screenshot of executed tests: 
Integration test:
Framework Used: Jest and Enzyme
Github Link: https://github.com/bmvisoky/CosmosSmithy/blob/bmvisoky/src/App.test.js
Screenshot: 
Acceptance Test:
Framework Used: Mocha, Nightmarejs
Github Link: https://github.com/bmvisoky/CosmosSmithy/blob/master/src/test.js
Description of a test: Accept proper login test: 
https://github.com/bmvisoky/CosmosSmithy/blob/master/src/test.js
Note: github link is the same as all acceptance tests are kept in the same file. Were the project larger, more files would likely be made for accessibility.
This test goes to the login page, attempts to log in using a valid email and password(for testing purposes I pre made these, using my academic email and a test password. Feature was included in acceptance testing as fast login times are important to functionality.
Video or Screenshot: 
    
Validation:
Script:
 For this test, I would like (user) to:
Log in to a designated testing account (NOTE: I do not wish to make people sign up for our site to test as I feel that it might alienate users and make them more likely to review the site well, as their email is attached to it.)
Generate a random character
Generate a random monster
Use the Initiative tracker to keep track of a fight between said character and monster
Write a journal entry
I am going to use this test to collect feedback on the UI of various pages, the overall appeal of features listed to users, and to find out if users will actually use the system. During testing, on each page I will ask users to rate the layout on a scale of 1-10, and if they would use the system for a Dungeons and Dragons game. 

Results:
 For this test we have 3 users, chosen for their familiarity with DnD and varying levels of technology literacy.

1: Zach P.
Ratings for each page: 
Login: 7/10
Monster Generator: 8/10
Character Generator: 8/10
Initiative Tracker: 7/10
Journal: 9/10
Average: 7.8

Opinions on Demonstrated Pages and Features:
Zach thinks that the features shown are fairly well polished, and the generation of characters and monsters can help get the ball rolling for designing NPCs and encounters. He personally wishes that the page had a Dark/Night mode, as he does not prefer all white websites, but the design is otherwise pretty clean. He also thinks it would be nice if the Login page automatically redirected. 

Would they use this site for a Dungeons and Dragons game? Other thoughts about it?:
Zach said he definitely would use this tool or similar for a DnD game, and felt that the character generation and initiative tracker were useful. As mentioned in the review of demonstrated pages, he feels a dark mode would be nice.

2: Ethan O.
Ratings for each page: 
Login: 7/10
Monster Generator: 9/10
Character Generator: 9/10
Initiative Tracker: 7/10    
Journal: 7/10
Average: 7.8/10

Opinions on Demonstrated Pages and Features: 
As a DM, Ethan feels that the monster generation and character generation tools will be very useful in making NPCs and creating encounters when players derail the campaign. Ethan likes the aesthetic of the pages, though admittedly can’t see himself using an online journal over pencil and paper, as he plays DnD in person primarily. 

Would they use this site for a Dungeons and Dragons game? Other thoughts about it?:
Ethan would use this tool for DnD, especially for character generation and initiative tracking. Ethan suggested potentially developing an encounter log to document the outcome of fights tracked in the initiative tracker page.

3: Noah W.
Ratings for each page: 
Login: 8/10
Monster Generator: 9/10
Character Generator: 9/10
Initiative Tracker: 8/10
Journal: 9/10
Average: 8.6/10

Opinions on Demonstrated Pages and Features:
Noah really enjoyed the simple, clean white layout of our pages. He feels that as a player, he doesn’t have as much use for the monster and character generators outside of initially generating his character, however felt they were very well made. He wishes the buttons on the login page had an outline, but otherwise felt the website does what it needs to do pretty well.

Would they use this site for a Dungeons and Dragons game? Other thoughts about it?:
Noah says he could see himself using this to create a character at the start of a campaign, and possibly to keep tabs on what is going on during a session. He also noted that he wished the login button redirected to the homepage after logging you in. 

Reflections: 
I feel that based on our user evaluation, nothing was working poorly, and the critiques we got were more oriented towards things that could improve features, rather than features that detract from the product. The learning curve of our system was very low, and made it easy for new users to jump right in. Users performed tasks as expected, and I feel that our simple layout helped avoid confusion. The tasks did not, however, always produce the expected result. 2 of the 3 tested users expected a redirect upon login, and that is something we would consider for future implementation. In the future, we may also add a dark theme to the site for users who dislike light theme websites, as well as a combat log page for users to document encounters specifically, integrated with the initiative tracker. All tested users were fond of the character and monster generation system, and felt that it was fun to see what would pop out of it. Overall, we feel as a team we did a solid job implementing our value proposition. 

