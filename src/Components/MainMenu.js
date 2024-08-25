import React,{useContext} from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu() {
    const {gameState,setGameState}=useContext(QuizContext);
  return (
    <div className="Menu">
     <button className="s"onClick={()=>{setGameState("Quiz")}}>Start Quiz</button>
    </div>
  );
}


