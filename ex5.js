let quizzQuestion = [
    {
        question: "1 + 1 = 2",
        answer: true
    },
    {
        question: "65 + 19 = 83",
        answer: false
    },
    {
        question: "10^2 + 1 = 103",
        answer: false
    },
    {
        question: "99 + 66 = 69",
        answer: true
    },
    {
        question: "ca + fe = Em dep qua",
        answer: true
    },
    {
        question: "yes + no =  ??",
        answer: false
    },
    {
        question: "You are so beautiful ?",
        answer: false
    },
    {
        question: "1 + 10 = 11",
        answer: true
    },
    {
        question: "wibu + Avenger = We are Buvenger",
        answer: true
    }
]
let quizz = document.getElementById("quizz");
let btnanswerno = document.getElementById("btnanswerno");
let btnansweryes = document.getElementById("btnansweryes");
let scoreShow = document.getElementById("score");

// chọn câu hỏi ngẫu nhiên
function num(){
    let x =  Math.floor(Math.random()*quizzQuestion.length)
    return x
}
let numbquestion = num();

// cho show câu hỏi ra màn hình
quizz.innerText = quizzQuestion[numbquestion].question;


let scorecheckbox = document.getElementById("score-checkbox");
let timercheckbox = document.getElementById("timer-checkbox");

scorecheckbox.onclick = function(){
    playGameHaveScore();
}
    playGameNoScore();

function playGameHaveScore()
{
    let score = 0;
btnanswerno.onclick = function(){
    
    if(quizzQuestion[numbquestion].answer == false)
    {
        score ++;
        scoreShow.innerText = score;
        num();
        numbquestion = num();
        quizz.innerText = quizzQuestion[numbquestion].question;
    }
    else
    {
        num();
        numbquestion = num();
        quizz.innerText = quizzQuestion[numbquestion].question;
    }

}
btnansweryes.onclick = function(){
    
    if(quizzQuestion[numbquestion].answer == true)
    {
        score ++;
        scoreShow.innerText = score;
        num();
        numbquestion = num();
        quizz.innerText = quizzQuestion[numbquestion].question;
    }
    else
    {
        num();
        numbquestion = num();
        quizz.innerText = quizzQuestion[numbquestion].question;
    }
}
}

function playGameNoScore(){
    // let score = 0;
    btnanswerno.onclick = function(){
        
        if(quizzQuestion[numbquestion].answer == false)
        {
            // score ++;
            // scoreShow.innerText = score;
            num();
            numbquestion = num();
            quizz.innerText = quizzQuestion[numbquestion].question;
        }
        else
        {
            num();
            numbquestion = num();
            quizz.innerText = quizzQuestion[numbquestion].question;
        }
    
    }
    btnansweryes.onclick = function(){
        
        if(quizzQuestion[numbquestion].answer == true)
        {
            // score ++;
            // scoreShow.innerText = score;
            num();
            numbquestion = num();
            quizz.innerText = quizzQuestion[numbquestion].question;
        }
        else
        {
            num();
            numbquestion = num();
            quizz.innerText = quizzQuestion[numbquestion].question;
        }
    }
}
