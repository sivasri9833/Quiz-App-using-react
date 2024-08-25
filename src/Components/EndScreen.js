import React,{useContext} from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import {Questions} from "../Helpers/QuestionBank";

function EndScreen() {
    const {score,setScore,setGameState}=useContext(QuizContext);

    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu");

    };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{score}/{Questions.length}</h3>

      {score==Questions.length?

(<h1 className="gr">"Excellent attempt! Your dedication shines through"</h1>):
(score>(Questions.length)/2?
    (<h1 className="gr">Bravo! You are on the right track keep going!</h1>):
    (<h1 className="gr">Nice try! Every step forward is progress.</h1>)
)

}
    
      <button className="r"onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
