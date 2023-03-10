import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

const Flashcards = [
  {
    englishWord: "Dog",
    spanishWord: "Perro",
    difficulty: "easy"
  },
  {
    englishWord: "Cat",
    spanishWord: "Gato",
    difficulty: "easy"
  },
  {
    englishWord: "Frog",
    spanishWord: "Rana",
    difficulty: "hard"
  },
  {
    englishWord: "Snake",
    spanishWord: "Serpiente",
    difficulty: "easy"
  },
  {
    englishWord: "Cow",
    spanishWord: "Vaca",
    difficulty: "medium"
  },
  {
    englishWord: "Elephant",
    spanishWord: "Elefante",
    difficulty: "easy"
  },
  {
    englishWord: "Turtle",
    spanishWord: "Tortuga",
    difficulty: "medium"
  },
  {
    englishWord: "Turkey",
    spanishWord: "Pavo",
    difficulty: "hard"
  },
  {
    englishWord: "Dolphin",
    spanishWord: "Delfin",
    difficulty: "easy"
  },
  {
    englishWord: "Raccoon",
    spanishWord: "Mapache",
    difficulty: "hard"
  }
]

const cardList = Flashcards;

function App() {
  const [currentCardi, setCurrentCardi] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');

  const currentCard = cardList[currentCardi];

  const handleNextCard = () => {
    setFlipped(false);
    if(currentCardi == cardList.length - 1){
      setCurrentCardi(0);
    }
    else{
      setCurrentCardi(currentCardi + 1);
    }
    setUserInput('');
  }

  const handlePrevCard = () => {
    setFlipped(false);
    if(currentCardi <= 0){
      setCurrentCardi(cardList.length - 1);
    }
    else{
      setCurrentCardi(currentCardi - 1);
    }
    setUserInput('');
  }

  const handleGuessSubmit = () => {
    if(currentCard.spanishWord != userInput){
      setFlipped(true);
      alert("Wrong!");
    }
    else{
      setFlipped(true);
      alert("Correct!");
    }
  }

  return (
    <div className="App">
      <h1>Learning Animals in Spanish!</h1>
      <h2>How well do you know your animals in Spanish? Test it here!</h2>
      <h3>Number of Cards: {cardList.length}</h3>
      <h4>Note: Please capitalize the first letter of your submission.</h4>
      <Flashcard
        englishWord={currentCard.englishWord} 
        spanishWord={currentCard.spanishWord} 
        difficulty={currentCard.difficulty}
        flipCard={flipped}
        onCardClick={() => setFlipped(true)}
        userInput={userInput}
        handleGuess={(e) => setUserInput(e.target.value)}
        handleGuessSubmit={handleGuessSubmit}
        />
        <button onClick={handleNextCard}>Next</button>
        <button onClick={handlePrevCard}>Previous</button>
    </div>
  )
}

export default App