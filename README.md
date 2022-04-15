# inspirational-jeopardy
UWBC Group Project #1

Elevator Pitch:

Have you ever wanted to get better at Jeopardy? Do you dream of being a trivia whiz but find yourself losing motivation? Well we have the website for you! Checkout our Inspiration Jeopardy- where every question wrong gives you a delightful inspiration quote to cheer you on! 
 
## User Story
As a user
I WANT to play a game of Jeopardy and 
I WANT to be presented with inspiration if incorrect.

## Acceptance Criteria / Description
GIVEN a Jeopary Quiz
WHEN I select categories from a dropdown
THEN I can use a button to start the quiz.
WHEN I use the start button 
THEN I am taken to the first question of the quiz.
WHEN I select the correct answer for the question
THEN I move onto the next question.
WHEN I select an incorrect answer
THEN I am presented with an inspiration quote to encourage me. 
WHEN the inspiration quote is presented
THEN I can either chose to see more inspiration, or move on to the next question. 
WHEN I have answered all questions 
THEN I will get a final page where I see all my answers, correct or incorrect, with my score.

## Link to GitHub Repo:
https://github.com/lola-violet

## Link to deployed site:
https://lola-violet.github.io/inspirational-jeopardy/

## Screenshots of Inspirational Jeopardy:
![image](https://user-images.githubusercontent.com/98775943/163468337-b0f6800a-f08f-4f6f-acad-c20261f9a8a4.png)
![image](https://user-images.githubusercontent.com/98775943/163468387-9fbe0267-ef01-48be-99c5-747bd50482d4.png)
![image](https://user-images.githubusercontent.com/98775943/163468419-356ac0bf-9a78-4c01-a1e9-d1bd8bea6486.png)
![image](https://user-images.githubusercontent.com/98775943/163468561-e5dbdc30-2700-4592-9c14-66b94b6710df.png)
![image](https://user-images.githubusercontent.com/98775943/163468701-0588b5d0-0079-4bfe-ab72-427a0f1cf45b.png)

## Effects not seen in above screenshots:
- Most of our styling is from Materialize
- All buttons have hover effects
- The category buttons are dropdowns
- Answered question boxes become empty
- Toasts pop up when answer is incorrect & correst. Correct answer will have + the amount added to score
- Players score is being logged into the console and additional points are being added to it as they answer questions.
- Previous Scores are being saved in local storage
- Start again button refreshes the page to go through the quiz from the start


## Summary:
For this group project our project manager was Eric Taylor, our git administrator was Lola Applegate. 

James Harding was our JavaScript and API guru. Eric took the lead on creating most of the HTML structure and delagating tasks on our Kanban board. Lola was our main stylists and created our external milestone sheet, and our Google Slides for our manatee tank. Dahlia was responsible for writing the ReadMe, setting up the score system, linking Materialize, and assisting with styling. 

Our successes during this project were:
-Creating a functioning Jeopardy style game from scratch
-Successfully pulling information from two seperate APIs
-Styling the site to be dynamic and engaging

Our downfalls during this project were:
-Having the API stay within the parameters we set when pulling data (ex: questions needing media examples)
-Having the previous scores display the categories that were used when the score was earned
-Playing the Jeopardy theme music during the game
-Creating a favicon for the site with the Jeopardy globe
