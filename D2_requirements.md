### Positioning

----------

  

Problem statement

The problem of disorganized preparation and running of tabletop roleplaying games (TTRPGs) affects both player and game master; the impact of which is a much less enjoyable game for all parties involved.

  

Product Position Statement

For game masters who regularly run games, Cosmos Smithy is an easy to use tool that allows game masters to organize and run their game all in one place, unlike other products that only do one or two things, our product will manage everything from preparation to running the game, as well as a general note taking app.

  

Value Proposition

Cosmos Smithy is a web application for Dungeon Masters to organize their games, to create, generate, and organize, and run their games, all in one place when they need creative assistance.

  

Consumer Segment

People who participate in TTRPG’s, specifically writers and Game Masters.

  

### Stakeholders

----------

  

a.) Project Owner

-   Responsible for making final decisions on product and looking at business applications of product.
    

b.) Application Developers

-   Responsible for implementing Product Owners vision and ensuring product is in working state.
    

c.) Game Masters/Writers

-   Will be utilizing the product and using it to run their games. Responsible for informing application developers of any bugs.
    

d.) Competitors

-   DndBeyond, KoboldFightClub, Donjon.
    

  

### Functional Requirements

----------

  

-   Generation, the program will be able to randomly generate:
    

-   Characters
    
-   Quests
    
-   Towns
    
-   Shops
    

-   Organization, the program will allow users to:
    

-   Take notes on a per session basis
    
-   Take notes on world
    
-   Take notes on characters
    

-   Application, the program will allow users to run the game by:
    

-   Keeping track of initiative
    
-   Keeping track of session notes
    
-   Working soundboard (optional)
    

  

### Non-functional Requirements

----------

1.  Availability: Access to stored information should be accessible from anywhere, so long as the user is logged in.
    
2.  Usability: The product should be easily usable, any information needed should be only three clicks away at most.
    
3.  Security: The information stored on the website should only be accessible by the user who created it.
    
4.  Accessibility: The product should be usable by any user, regardly of customer segment and with limited knowledge of the product going in.
    
5.  Reliability: The product should be usable at any given point, since use time may vary greatly depending on the user.
    
6.  Utilization Rate: High performance, quick response time of inputs.
    
7.  Website Layout: Everything organized, simple color scheme.
    

  

### MVP

----------

  

Developing the MVP for this project, our strategy is to tackle each section of the product (Generate, Create, Run) until each feature is satisfied. By implementing the base features we have planned in that order, we will be able to focus in and change any requirements necessary later on down the line. This way we are able to validate each feature before moving onto the next step. Validating features will be conducted through individually testing each functional part of our program to ensure it functions as intended.

  

### Use Cases

----------

Use Case Diagram:

![](https://lh5.googleusercontent.com/DWaNmp4KZZjLeirv_jjxrcf3G6z_kA6Jgw8qyf6QSZA-M7uOgLBL3F8cEGA0nVEu9SaqJT7fxPI1S0ekck2h6J9XD5b4e57LdDFkjbqNwqQrhc-Q02zNHuiqivJOMuMb_NmkCq9R)

  
  
  
  
  

Use Case: Create New World

Actor: Game Master, Player

Description: The user will click the Create New World button to see their options on world creation.

Pre-Conditions: The user has an account.

Post-Conditions: The user has access to create aspects of their game that they didn't before.

Main Flow: 1. The user will create an account.

2. The user will click on creating a new world to see their options for game

organization and creation.

3. The user clicks create character.

Alternative Flow:

1.  The user clicks Create New World
    
2.  The user is prompted with a message to create an account first.
    
3.  The user creates an account.
    
4.  The user will click on creating a new world to see their options for game
    

organization and creation.

5.  The user clicks create town.
    

  
  

Use Case: Create Character

Actor: Dungeon Master

Description: The dungeon master will have the ability to create a new character to keep track of in their world. Information includes: class, race, age, level stats, description, and general notes

Pre-Conditions: The user has a world created.

Post-Conditions: The user has a new character logged in their world and has the ability to edit this information.

Main Flow:

1.  The user clicks the new character button.
    
2.  The user is prompted with a character sheet with available entry points.
    
3.  The user logs a class, race, age, and the characters level.
    
4.  The user can then edit any of the available stats.
    
5.  The user  can click on the ‘add description’ box and add any physical characteristics that the player wants to be remembered.
    
6.  The user can click on the ‘add notes’ box and add any notes they want to remember about the character.
    

  
  

Use Case: Tracking Initiative

Actor: Dungeon Master

Description: The dungeon master runs a game and tracks initiative for combat

Pre-Conditions: The user has a world created and characters logged

Post-Conditions: The user is shown a list of monsters and characters with their initiative shown

Main Flow:

1.  The user accesses their account
    
2.  The user can start a combat encounter
    
3.  Initiative is rolled and displayed for the user
    

  

Use Case: Save World

Actor: Game Master/Writer

Description: The logged in user saves their current data for use next time they load it.

Pre-Conditions: The user is logged in and has a world created.

Post-Conditions: The world is saved to their account

Main Flow:

1.  The user is logged into their account
    
2.  The user presses “Save World”
    
3.  The world is saved to their account.
    

  
  

Use Case: Create Account

Actor: Game Master/Writer

Description: The game master/writer chooses their credentials in order to save their content and access it later

Pre-Conditions: The user is able to create a new account using their chosen credentials

Post-Conditions: The user is able to log into the website with their chosen credentials and access their content

Main Flow:

1.  The user selects the option to create a new account
    
2.  The system prompts the user to enter a username and password
    
3.  The user selects a username and password
    
4.  The system stores the login information for future use
    

Alternative Flows:

1.  The user wishes to cancel the account creation process
    
2.  The system cancels the account creation process
    

  

Use Case: Edit Existing World

Actor: Game master, Players

Description: The person who created or has access to a world can edit details pertaining to it that have already been created.

Pre-Conditions: The user has an account, and has a premade world.

Post-Conditions: Existing world details are changed for users successfully.

Main Flow: User logs in, chooses a world to edit, and changes the details of it.

Alternative Flows: User does not have a world made, can not change a world that is not made

  

### User Stories

----------

  

-   Brandon Visoky
    

a.) “As a Dungeon Master, I want a way to design and build combat encounters so that they are easily accessible while I am running the game.”

b.) “As a writer, I want to be able to take notes on my story and have locations, characters, and story ideas easily accessible from one place, so that writing becomes more efficient.”

  

-   Joe Carter
    

a.) “As a Dungeon Master, I want a way to create and remember my characters stats and abilities.”

b.) “As a player, I want to easily track numerical information about my characters..”

  

-   Melissa Peiffer
    

a.) “As a player I want to be able to edit my characters so that they reflect the changes  they experience throughout the game.”

b.) “As a Dungeon Master, I would like a quick way to generate randomized npcs for my  current campaign.”

  

-   Hannah Park
    

a.) “As a new player I will utilize the random character creator to get ideas on new characters to play as.”

b.) “As a Dungeon Master I will create an account to save my notes for future games.”

  

-   Travis Flake
    

a.) “As a player, I would like the ability to change details about my world during a game session”

b.) “As a dungeon master, I would like to be able to save my worlds for future use”

  

### Trello

----------

![](https://lh4.googleusercontent.com/Jr-Y1vbSbkK4sRUSlu6quwI2OHZGgpAr5WcpIrk6BPiEqic8iHNf5gZhvVVYgG_3X3Mj6-owIayxU2P-LoaTbyOBotp28ScR2sMBhYIGcJtyiB65yYaof677bgbW1ttINHxz9a7x)
