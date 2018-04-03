# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

🍀 CATCH A FOUR-LEAF CLOVER 🍀

CATCH A FOUR-LEAF CLOVER is the name of the game. Gameplay is straightforward; there will be various particles (snow, rain, different leaves) being stirred by the wind. Goal is to find four-leaf clovers amongst them and gather them (using mousepad to control one’s movement and mouseClick to catch them and add +1 to your score). The more clovers you catch, the greater your luck and the higher your score. There will be a 60 sec duration for how many clovers one can find. A highest-scores (think arcade-style) will always be present on the side to make you want to challenge the best-doers. Because of my deep-rooted love for architecture and nature, I will use various background images and maybe gifs to create a sweet juxtaposition effect, with rain or snow and wind (using CSS and animations to create those) to create a messy atmosphere, where to find a clover might be a bit of a challenge. More extreme weather conditions, i.e. higher winds, will therefore raise the level of difficulty. Humor will be integrated (post MVP) in some sorts for entertainment value (a poem or something to help dull the edge of looking for clovers)!


## Wireframes

Include images of your wireframes.

[Wireframes](images/4-leaf-clover-wireframe.jpg?raw=true "Wireframes")

## Priority Matrix     
[PriorityMatrix](images/4-leaf-clover-priority-matrix.jpeg?raw=true "PriorityMatrix")               

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.

1: Create a groovy landing page, for now thinking of somthing similar to <a href="https://www.google.com/search?q=beatles+sgt+pepper+album&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjH9IqB8Y7aAhUDneAKHZD4CdwQ_AUIDCgD&biw=1210&bih=738#imgrc=Dv64ktmopujILM">The Beatles Sgt Pepper Album cover</a>, in terms of kookiness.

2: For the overall project, my goal is to have at least two different levels to incorportate where in each level there will a separate background image or gif to and different weather conditions. I will have to create some sort rain, snow, or wind-blown particles conditions (my plan is to use CSS for those).

3: Create a way to keep score as you play and to log highest-scores, so to have players try to one-up one another...

## Game Components

As stated above, a landing page, at least two different backdrops with different weather conditions for the game pages and a score bar indicating the players score. At the end (if time permits), the goal is to have a highest scores log. 

### Landing Page
What will a player see when they start your game?
Something cloverful and beautiful, maybe referencing some architecture (that's the juxtaposition) or something else I find wonderful or random, the goal is to tie it all together to catching clovers and bring home some luck!

### Game Initialization
What will a player see when the game is started?
A still or moving background and after a few seconds delay, some snow or rain will start to fall starting slow and then increasing rapidly, creating some sort of weather condition...

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the game?
Amongst the snow, there will a few clovers, which the player must try to hone in on using the mousepad and grab using mouseclick.

### Winning The Game
What does it look like when the game ends, what determines winning or losing?
The more clovers you catch, the greater you score (and your luck!). It's a single player game but the goal after will be to one-up the previous players score...

### Game Reset
How will the user restart the game once it has been completed.
Some sort of "play again" button to reset the game...

## MVP 

Include the full list of features that will be part of your MVP 
A landing page introducing the game, gameplay instructions and a button to "begin game"...
For now, a single level with one particle type (i.e. snow or rain) that you must circumvent to you catch a four-leaf clover.
Include a scorecard that will be visible when playing the game, so that you can keep track of how many clovers you have caught.
Once you're finished with that level, a log of previous "highest-scores" that you can compare yourself to.

## POST MVP
Flesh out more levels to the game, enough to maybe wrap into an app...

Include the full list of features that you are considering for POST MVP
## Functional Components
Different terrains, architectural backdrops and weather conditions, enough to keep one distracted for hours at a time...

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Logic will be to add event listeners to a moving object, don't know how hard that will be yet, and if the player clicks on that object, to log +1 to his name. There will be a time limit of say 60 seconds, where the player has to catch as many 4-leaf clovers as he/she can.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| Landing Page | H |  2-3hrs | 2hrs | 2hrs |
| Background Images/Gifs for Game Page | M | 1hr| >1hr | 1hr |
| Adding Particles/Elements | H |  3-4hrs | 4hrs | 4hrs |
| Create Event Listeners/Click Event/Logic Around Particles | H |  5-7hrs | 7-8hrs | 8hrs |
| Add Alloted Time On Level 1 | H |  1-2hrs | 1hr | 1hr |
| Add Scorecard | H | 1-2hrs | 2hrs | 2hrs
| Add Highest Scores Table | H |  1-2hrs | 2hrs | 2hrs |



## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| timer | Adds a timer to a page with if statements dependent upon game conditions |  

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.
 I downloaded and incorportated the Miller Banner Light font (miller-banner-light.ttf) to my game throughout, to match the Modernist theme throughout the game.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.
Simplicity is key. Here I made a scorecard being held by the x variable. If a player clicks on a clover, it will counter x +1. Logic was much simpler than what I assumed initially.

let x = 0; // making scorecard, where x variable holds the score
$('.divForClovers').on('click', function(event){
$(this).remove();
x++;
$('.scorecard').text(`score: ${x}`);

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.
 location.reload(); // allowed me to do a simple reset of the game if the player is unhappy with their score.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
 The game developed and evolved within the vision I had going into it. Instead of adding a colorful, natural backdrop, I chose instead to work with black-and-white, Modernist backdrops to create an interesting contrast effect with the colored particles (rain and clovers)...

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
#### SAMPLE.....
Fitting a background image comfortable onto the game was merely trial and error.
I had to add a height to eliminate any unnecessary whitespace.
