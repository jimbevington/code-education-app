var express = require('express');
var router = express.Router();

/* GET facts listing. */
router.get('/', function(req, res, next) {
  res.json(
    [
      {
        info: [
          {
            id: 1,
            question: "What is a computer?",
            answer: "A computer is a type of machine which can follow instructions and do lots of useful things. It doesn’t have a brain like you, but with code you can tell it what you want it to do."
          },
          {
            id: 2,
            question: "What is code?",
            answer: "Code allows you to make things with your computer. You can make anything you want! You could make a game, a website or show some pictures…..What would you like to make?"
          },
          {
            id: 3,
            question: "What does code look like?",
            answer: "Code is made up of words, numbers and symbols. You need to put them in the right order to tell your computer what you want it to do. Just like a set of instructions."
          },
          {
            id: 4,
            question: "Does code need to be in order?",
            answer: "Before you write your code you need to think about the order it needs to be in. Think about when you get ready to go outside, you need to put your socks on before your shoes. If you put your shoes on before your socks that would be silly wouldn’t it?! The same goes for code, the order of instructions is very important."
          },
          {
            id: 5,
            question: "What are computer bugs?",
            answer: "When your code doesn’t do what you want it to do, that’s a bug! Imagine you made a robot, and you want it to go forward when your press the up key, but instead the robot moves backwards - thats a bug! Bugs are nothing to be afraid of, they help us learn and allows us to make our code even better."
          }
        ]
      },
      {
        q_and_a: [
          { id: 1,
            question: "What machine do you use to write code?",
            correct_answer: "A computer",
            incorrect_answer_1: "A television",
            incorrect_answer_2: "A telephone"
          },
          { id: 2,
            question: "What is code?",
            correct_answer: "A set of rules or instructions",
            incorrect_answer_1: "A type of computer",
            incorrect_answer_2: "A game"
          },
          { id: 3,
            question: "What does code look like?",
            correct_answer: "Words, numbers and symbols",
            incorrect_answer_1: "A story in a book",
            incorrect_answer_2: "You can’t see code, it’s invisible"
          },
          { id: 4,
            question: "What is a computer bug?",
            correct_answer: "When your code doesn’t work properly",
            incorrect_answer_1: "A spider that lives in your computer",
            incorrect_answer_2: "There is no such thing"
          },
          { id: 5,
            question: "Does it matter what order you type your code in?",
            correct_answer: "Yes",
            incorrect_answer_1: "No",
            incorrect_answer_2: "Sometimes"
          }
        ]
      }
    ]
  );
});

module.exports = router;
