# FlashCards

Flashcards simulates a set of flashcards right in your terminal. A set of questions is loaded one at a time and you choose one of three answers using the arrows or number key! 

# How it Runs
![Jul-08-2021 19-48-38](https://user-images.githubusercontent.com/78389005/125011375-900b3f00-e025-11eb-87b0-fa41c3a57983.gif)


# Technologies Used

- JavaScript
- Mocha
- Chai
- Test Driven Development

# Install/Setup Instructions

Clone down this repo. 

```bash
git clone [remote-address]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

Running `node index.js` should start the game! 

 - You should be prompted with a question. 
 - Three answers will be populated below and one will be highlighted. 
 - Use the arrows on your keyboard to toggle through the answers. Once the answer you want to use is highlighted, press enter to select it.
 - A message will pop up telling you if it is correct or incorrect!
 - Press enter again to see the next question and repeat! 

**NOTE:** There are 30 questions in the deck. Once you have run through all the questions a message will pop up telling you how many you got right. It will also exit the game for you. If at any point you want to exit the game, press **ctrl + c** and you will be taken out of the game. 
