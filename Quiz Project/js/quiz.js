
let quiz=[
{
    question:" java script is ?",
    a:"language" ,
    b:"programming language",
    c:"scripting language",
    d:"a,b",
    correct:"d"
},
{
   question:"  Which of the following keywords is used to define a variable in Javascript",
   a:"var",
   b:"let",
   c:"const",
   d:"a and b",
   correct:"a"
},
{

    question:"Which of the following methods is used to access HTML elements using Javascript?",
    a:"getElementbyId()",
    b:"getElementbyClassName()",
    c:"a and b",
    d:"none of them",
    correct:"c"

},
{
    question:"How can a datatype be declared to be a constant type?",
    a:"const",
    b:"var",
    c:"let",
    d:"none of them",
    correct:"a"
   
},
{
    question:" What keyword is used to check whether a given property is valid or not?",
    a:"in",
    b:"is",
    c:"is in",
    d:"none of them",
    correct:"a"  
}

]


let qusetionS=document.getElementById("question")
let a_text=document.getElementById("text_a")
let b_text=document.getElementById("text_b")
let c_text=document.getElementById("text_c")
let d_text=document.getElementById("text_d")
let answers=document.getElementsByClassName("radio_btn")
let next=document.getElementById("btn_next")
let pre=document.getElementById("btn_pre")
let subm=document.getElementById("submit")
let againTry=document.getElementById("try")


var questionCont=0
var score=0;
var getdata=localStorage.getItem("quiz")
// if(getdata){
// getdata=JSON.parse(getdata)
// questionCont=getdata
// }
const loadques=()=>{
   var currentQuiz=quiz[questionCont]
   qusetionS.innerHTML=currentQuiz.question
   a_text.innerHTML=currentQuiz.a
   b_text.innerHTML=currentQuiz.b
   c_text.innerHTML=currentQuiz.c
   d_text.innerHTML=currentQuiz.d 
   localStorage.setItem("quiz",JSON.stringify(questionCont))
}

select()
function select(){
    let answer;
    for(var i=0;i<answers.length;i++){
        if(answers[i].checked){
            answer=answers[i].id;
        }    
    }

    return answer;
}
// function delall(){
   
//     for(var j=0;j<answers.length;j++){
//         if(answers[j].checked){
//             answers[j].id
//         }    
       
//     }
// }
// function delall(){

//      answers.checked=null


// }




loadques()
next.onclick=function(){
    var checkAns=select()
    if(checkAns===quiz[questionCont].correct){
        score++;
        console.log(score)
    }

console.log(checkAns)
// delall()
   if(questionCont<quiz.length-1){
        questionCont++;
            pre.style.display="inline-block"
            loadques() 
           
    }
 
   else if(questionCont++){
       subm.style.display="inline-block"
       pre.style.display="none"
       next.style.display="none"
    }
 
  
 localStorage.setItem("quiz",JSON.stringify(questionCont))

}
pre.onclick=function(){
    
        questionCont--;
        loadques()    
     }
 
     subm.onclick=function(){
         let a=document.getElementById("try_again")
         let showscroe=document.getElementById("showscore");
         showscroe.innerHTML="Your Score is"+" "+" "+": "+score+"/"+quiz.length;
        againTry.style.display="inline-block"
   againTry.onclick=function(){
       window.location.reload()
   }
   localStorage.setItem("quiz",JSON.stringify(questionCont))

     }
    
   const  logout=()=>window.location.href="../pages/login.html"



