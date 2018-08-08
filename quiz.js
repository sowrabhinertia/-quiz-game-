var currentquestion=0;
var score=0;
var totquestions = questions.length;
var container=document.getElementById("quizcontainer");
var questionel=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextbutton=document.getElementById("nextbutton");
var res=document.getElementById("result");

function loadquestion(questionIndex)
{
  var q=questions[questionIndex];
  questionel.textContent =(questionIndex+1)+". "q.question;
  opt1.textContent=q.option1;
  opt2.textContent=q.option2;
  opt3.textContent=q.option3;
  opt4.textContent=q.option4;

}
function loadnextquestion(){
  var selectedoption=document.querySelector("input[type=radio]:checked");
  if(!selectedoption){
    alert("select the option");
     return;
  }
  var answer=selectedoption.value;
  if(answer==questions[currentquestion].answer){
    score=score+10;

  }
  selectedoption.checked=false;
  currentquestion++;
  if(currentquestion==totquestions-1){
    nextbutton.textContent="finish";
  }
  if(currentquestion == totquestions){
    container.style.display="none"
    res.style.display=" ";
    res.textContent="your score is"+score ;
    return;
  }
  loadquestion(currentquestion);
}
loadquestion(currentquestion);
