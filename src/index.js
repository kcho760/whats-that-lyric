import Playbutton from "./scripts/playButton"
import Lyrics from "./scripts/lyrics";
import FiftyFifty from "./scripts/fifty_fifty";
import SecondChance from "./scripts/second_chance";
import Button1 from "./scripts/button1";
import Button2 from "./scripts/button2";
import Button3 from "./scripts/button3";
import Button4 from "./scripts/button4";
import NextQuestionButton from "./scripts/nextQuestionButton";

import Timer from "./scripts/timer"

document.addEventListener('DOMContentLoaded', () => {
    const play = document.getElementById('play-button');
    
    let timer = null;
    let lyrics = null;
    
    new Playbutton(play)
    
    play.addEventListener('click', () =>{
        timer = new Timer(10);;
        lyrics = new Lyrics();
        })

    const fifty_fifty = document.getElementById('fifty-fifty');
    new FiftyFifty(fifty_fifty)    
    const second_chance = document.getElementById('second-chance');
    new SecondChance(second_chance)            
    const button1 = document.getElementById('button1');
    new Button1(button1, lyrics, timer);
    const button2 = document.getElementById('button2');
    new Button2(button2, lyrics, timer)
    const button3 = document.getElementById('button3');
    new Button3(button3, lyrics, timer)
    const button4 = document.getElementById('button4');
    new Button4(button4, lyrics, timer)
    const nextQuestion = document.getElementById('next-question');
    new NextQuestionButton(nextQuestion);

    nextQuestion.addEventListener("click", () => {
    const innerDiv2 = document.querySelector(".inner-div2");
    const innerDiv3 = document.querySelector(".inner-div3");
    innerDiv2.style.display = "block";
    innerDiv3.style.display = "none";
    // Reset the lyrics and timer variables
    lyrics.getNewLyrics();
    timer = new Timer(10);
    });

})


