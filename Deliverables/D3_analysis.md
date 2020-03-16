
### System Description

----------

  

The problem of disorganized preparation and running of tabletop roleplaying games (TTRPGs) affects both player and game master; the impact of which is a much less enjoyable game for all parties involved. For game masters who regularly run games, Cosmos Smithy is an easy to use tool that allows game masters to organize and run their game all in one place, unlike other products that only do one or two things, our product will manage everything from preparation to running the game, as well as a general note taking app.  Cosmos Smithy is a web application for Dungeon Masters to organize their games, to create, generate, and organize, and run their games, all in one place when they need creative assistance. In particular, people who participate in TTRPG’s, specifically writers and Game Masters will have an interest in this system.

In this system, users can login. Game masters (GMs) can create a new world or access an existing world. Selecting the world by name allows the user to build and access encounters, towns, and quests. These all allow the GM to better keep track of their game and players progress inside of it. Both Game masters and players may create a journal which contains a notepad. Users may create, edit and delete notes. Players can create or generate player characters. Entities include monsters, characters, non-player characters, all serving a different function in the game world.

### Model

----------

### ![](https://lh6.googleusercontent.com/V2lGe7KUkNiCkx7M83qvJMvQcY5EcSAkVkWUti7xhSdihhvn0J1j1rDwGLV86K7AHqfh77DOSCy0fe0ayRxnB0cu_kEvAzuquYgmzW21knM5ZQdMic8I7cM9U7h6eTiNroO54m_t)

  

### Class Responsibilities

----------

  

-   User:
    

	-   The user class will hold the responsibilities of different kinds of users. In particular, Game Masters and Players will have different access to the system, which will need to be clear upon building the system. The users are broken into:
    

-   Game Master:
    

	-   Responsible for creating worlds, editing journals, and building characters.
    

-   Player:
    

	-   Responsible only for accessing journals and their own character.
    

-   World:
    

	-   This is the superclass of which all subclasses will be contained under. It holds all the information of a “world”, for the Game Master and Player can interact with.
    
-   Encounters:
    

	-   Class required for holding information about each individual encounter. Each encounter will have listed the name of the encounter, the locations, and the entities that will exist inside of the encounter. This is included so Game Masters can easily access it and run the game.
    

-   Towns:
    

	-   Class required for holding information about towns and cities in different game worlds. Towns also contain shops and entities.
    

-   Shops:
    

	-   Class required for holding shop information such as items, item specifications, item prices, and a character to run the shop.
    

-   Quests:
    

	-   Class required to hold quest information and location of quest. Contains name of quest and location of quest.
    

-   Entity:
    

	-   Class required for creating and generating entities, as well as holding information pertaining to entities within the world. Entities can be divided into:
    

-   Monster:
    

	-   Responsible for holding information regarding monsters in the world, including potential items they may drop.
    

-   Character:
    

	-   Class responsible for holding Names, Classes, and Stats for characters. This can be divided into two subclasses
    

-   NPC:
    

	-   Non player characters. NPC, unlike players, will have a static location within a world.
    

-   PC:
    

	-   Player characters are separate from NPCs in that they are controlled by players and can be developed progressively throughout a campaign.
    

-   Journal:
    

	-   The journal class is used for general note taking purposes, as well as storing various documents, like notes. The journal has one subclass, notepad.
    

-   Notepad:
    

	-   The notepad class is used for the creation, editing and deletion of notes. Each note created by a notepad will contain a name for the notes created.
