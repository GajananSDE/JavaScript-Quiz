const quizdata = [
    {
       question : "What does HTML stand for?",
        options: [
            "Hyper text markup Language",
            "Hyper transfer markup Language",
            "Hypertext machine language",
            "Hyper link Nad text markup lnguage"
        ],
        correct:0,
    },
    {
        question:"Which CSS propety is used to control the spacing between elements?",
        options:["margin","padding","spacing","border-spacing"],
        correct:1,
    },
    {
        question: "What is the use of h1 tag in HTML?",
        options:["larger-Heading","paragraph","inline","flex"],
        correct:0,
    },
    {
        question: "Property of the display in css",
        options:["inline","block","both","none of these"],
        correct:2,
    }
]
const he = document.getElementById('hello')

const answerElm = document.querySelectorAll('.answer');

const [questionElm ,option_1,option_2,option_3,option_4] =document.querySelectorAll("#question,#option_1,#option_2,#option_3,#option_4");
const submitbtn = document.getElementById('submit');
 let quiz = document.querySelector('#Quiz');
let currentQuiz = 0;
let score =0;
const loadQuiz = ()=>{
    const {question, options}=quizdata[currentQuiz];
    console.log(question);
   questionElm.innerHTML =` ${currentQuiz+1}:  ${question}`;
   options.forEach((curroption,index)=> window[`option_${index+1}`].innerHTML=curroption);
}

loadQuiz();



//submit select
const indexNumber = () => {
    // let ans_index;
    // answerElm.forEach( (cur,index) => {
    //     if(cur.checked){
    //         ans_index = index;

    //     }
    // });
    // return ans_index;
    let ans = Array.from(answerElm)
   return  ans.findIndex((curr,index) => curr.checked)
};
let deselected = () =>{
    answerElm.forEach((curr) => curr.checked = false)
}
submitbtn.addEventListener('click',()=>{
    const selectoption = indexNumber();
    console.log(selectoption)
  
      if(selectoption === quizdata[currentQuiz].correct){
      score++;
      }

     currentQuiz++;


  if(currentQuiz<quizdata.length){
    deselected();
    loadQuiz();
  } else{
      quiz.innerHTML = `<div class="result"> <h2> your score:  ${score}/${quizdata.length} correct Answer </h2>
      <h3> Congratulation on completing the quiz! </h3>
      <button class='reload-button' onclick="location.reload()"> Play Again </button>
      </div>`;
  }
})