import React from "react";
import './Flashcard.css'

const Flashcard = (props) => {
    const {flipCard, onCardClick, difficulty, spanishWord,
        englishWord, userInput, handleGuess, handleGuessSubmit} = props;

    const getDifficulty = () => {
		switch (difficulty) {
			case 'easy':
				return 'green';
			case 'medium':
				return 'yellow';
			case 'hard':
				return 'red'
		}
    }
    
    const cardColor = {
        backgroundColor: getDifficulty()
    }

    return(
        <div className="container"> 
       
            <div className="Flashcard" onClick={onCardClick} style={cardColor}>
                <div className="Flashcard-content">
                    <div className="card-text">{flipCard ? spanishWord : englishWord}</div>
                    
                </div>
            </div> 
            <div className="input">
                {!flipCard && (
                    <form onSubmit={handleGuessSubmit}>
                    <input 
                        type="text"
                        placeholder="Input your answer here..."
                        value={userInput}
                        onChange={handleGuess}
                    />
                    <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Flashcard;