import React,{useState,useContext} from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";

function Quiz() {
    
    const {score,setScore,setGameState}=useContext(QuizContext);

     const [currQuestion,setCurrQuestion]=useState(0);
     const [optionChosen,setOptionChosen]=useState("");

     const nextQuestion=()=>{
         if(Questions[currQuestion].answer== optionChosen){
            setScore(score+1);
         }
         
         setCurrQuestion(currQuestion+1);
     };


     const finishQuiz=()=>
     {
        if(Questions[currQuestion].answer== optionChosen){
            setScore(score+1);
         }
         
         setGameState("EndScreen");



     }


  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button  className="a"onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
        <button className="a"onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
        <button className="a"onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
        <button  className="a"onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
      </div>
       
       {currQuestion==Questions.length-1?

       (<button  className="d"onClick={finishQuiz}>FinishQuiz</button>):

       (<button className="c" onClick={nextQuestion}>Next Question</button>)}
    </div>
  )
}

export default Quiz;
