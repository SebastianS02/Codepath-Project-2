import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const [questionCard, setQuestionCard] = useState(0);
  const [answerCard, setAnswerCard] = useState(0);

  const cardList = Flashcards;

  return (
    <div>
      <h1>Learning Animals in Spanish!</h1>
      <h2>How well do you know your animals in Spanish? Test it here!</h2>
      <h3>Number of Cards: </h3>
    </div>
  )
}

const Flashcards = [
  {
    englishWord: "Dog",
    spanishWord: "Perro",
    color: "blue"
  },
  {
    englishWord: "Cat",
    spanishWord: "Gato",
    color: "pink"
  },
  {
    englishWord: "Frog",
    spanishWord: "Rana",
    color: "green"
  },
  {
    englishWord: "Snake",
    spanishWord: "Serpiente",
    color: "orange"
  },
  {
    englishWord: "Cow",
    spanishWord: "Vaca",
    color: "brown"
  },
  {
    englishWord: "Elephant",
    spanishWord: "Elefante",
    color: "gray"
  },
  {
    englishWord: "Turtle",
    spanishWord: "Tortuga",
    color: "red"
  },
  {
    englishWord: "Turkey",
    spanishWord: "Pavo",
    color: "yellow"
  },
  {
    englishWord: "Dolphin",
    spanishWord: "Delfin",
    color: "lightblue"
  },
  {
    englishWord: "Raccoon",
    spanishWord: "Mapache",
    color: "white"
  }
]

export default App