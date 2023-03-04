import React from "react";

const Flashcard = (props) => {
    return(
        <div className="Flashcard">
            <h4>{props.spanishWord}</h4>
            <h3>{props.englishWord}</h3>
        </div>
    )
}

export default Flashcard;