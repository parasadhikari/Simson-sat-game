// how will ig go
//1......==>key press game start
//button flash +level 1
//game sequence array
//user sequence arrray
//if user sequence match with game sequence then game continue(level up) neither game stop
let gamesequence=[];
let usersequence=[];

// let h3=document.querySelector("h3");
// let btn=["yellow","red","purple","green"]

let started=false;//game has not started yet
let level=0;


// document.addEventListener("click",function () 
// {
//     if (started==false) //i.e ki while "keypress" -->aagar started ki value false hh toh console.log karna hh 
//     {
//     //    console.log("game has been started!!!") 
//        started=true;//and ek bari start ho jaye tab false ki value true ho jayega aur ab key press krne pe kuch nhi hoga
//        levelUp();//jaise hi game start ho level up ho jayega
//     }
// })


document.querySelector("button").addEventListener("click", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});


//now any random button to be flash===>>>as game has been started and level 1 has been started
let h3=document.querySelector("h3");
let btn=["yellow","red","purple","green"]

function levelUp() 
{
    level++;
    h3.innerText=`Level ${level}`   
    
    let randIndex=Math.floor(Math.random()*3+1)//random inex generated
    let randColor=btn[randIndex]//now random index --se-->> random color chunna hai.
    let randBtn=document.querySelector(`.${randColor}`)//now selecting random color in dom

    gameFlash(randBtn);//will give flash property to any random button
    gamesequence.push(randColor)
    console.log(gamesequence)
    //    console.log(`randIndex=${randIndex}`);
    //    console.log(`randColor=${randColor}`);
    //    console.log(`randBtn=${randBtn}`);
    usersequence=[];//i.e every time user entry from starting
}


//gameflash is for random flash
function gameFlash(btn) //to flash btn its bgcolor is to be white for a minorsec
{
    btn.classList.add("flash");
    setTimeout(function () //since flash is for minisec
    {
        btn.classList.remove("flash");
    },200);
} //and we'll flash random button therefore random uppar


//userflash is for userclick
function userFlash(btn) //to flash btn its bgcolor is to be white for a minorsec
{
    btn.classList.add("userFlash");
    setTimeout(function () //since flash is for minisec
    {
        btn.classList.remove("userFlash");
    },200);
} //and we'll flash random button therefore random uppar



// *************************************now usersequence*********************************************
function btnPress() 
{
    console.log(this)//tells which button user had clicked
   let btns=this;
   userFlash(btns)//since when user press then too button got flash
 
   userColor=btns.getAttribute("id")
   console.log(userColor)
   usersequence.push(userColor);

   checkAns(usersequence.length-1);//it tells in which level we are
}

let allBtns=document.querySelectorAll(".btn")
for (btns of allBtns) 
{
    btns.addEventListener("click",btnPress)
}


function checkAns(idx) // function that tells in which level we are
{
    // console.log("current level :",level)
    // let idx=level-1;
    if (usersequence[idx]===gamesequence[idx]) //some time user can miss a no. of sequences
    {
        // console.log("same value")
        if (usersequence.length===gamesequence.length)
        {
          setTimeout(levelUp,1000) 
        }
    }

    else
    {
        h3.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start.`
        let body=document.querySelector("body")
        body.style.backgroundColor=("red")
        setTimeout(function () 
        {
            body.style.backgroundColor=("white")
        },100)
        reset();   
    }
    //now we gonna check weather we have click right button or not in sequence 
    //it can be middle of the game or at the end of game
}


function reset() 
{
  started=false;
  gamesequence=[];
  usersequence=[];
  level=0;    
}
// now is to tackle the array of gamesequence nad usersequences
// we can do what is-->we can push random color generated from gamesequence to an array 
// also we can do what is-->we can push random color generated from usersequence to an array 
//now we gonna see weather user click same sequence as earlier 