let rule=document.getElementById('rule')
let rules=document.getElementById('rules')
let cross=document.getElementById('cross');

rule.addEventListener("click", () => {
    rules.style.display = "block";
  });
cross.addEventListener("click",()=>{   
    rules.style.display="none";
  });
 
function pickUserHand(hand){
    let lower=document.querySelector('.lower')
    lower.style.display="none"

    let contest=document.querySelector('.contest');  
    contest.style.display="flex";
    
    if(hand=='stone'){
      document.getElementById('userPickedImage').src="images/stone.png"
      document.querySelector(".handImageContainer").style.borderColor = "blue";
    }
    if(hand=='paper'){
      document.getElementById('userPickedImage').src="images/paper.png";
      document.querySelector(".handImageContainer").style.borderColor = "green";
    }
    if(hand=='scissor'){
      document.getElementById('userPickedImage').src="images/scissor.png";
      document.querySelector(".handImageContainer").style.borderColor = "orange";
    }
     
    pickPcHand(hand);
}

function  pickPcHand(hand)
{
  let pcHand=["stone","paper","scissor"];
  let handByPc=pcHand[Math.floor(Math.random()*3)]
  if(handByPc=="stone"){
    document.getElementById('pcPickedImage').src="images/stone.png";
    document.querySelector(".pcImageContainer").style.borderColor = "blue";
  }
  if(handByPc=="paper"){
    document.getElementById('pcPickedImage').src="images/paper.png";
    document.querySelector(".pcImageContainer").style.borderColor = "green";
  }
  if(handByPc=="scissor"){
    document.getElementById('pcPickedImage').src="images/scissor.png";
    document.querySelector(".pcImageContainer").style.borderColor = "orange";
  }
   referee(hand,handByPc);   
}

if(localStorage.getItem("score"))
{
  score=JSON.parse(localStorage.getItem("score"));
  document.querySelector('#comScore h1').innerHTML=score.computerScore;
  document.querySelector('#myScore h1').innerHTML=score.userScore;
}
else
{
  score={
    userScore:0,
    computerScore:0
  }
}

  function referee(userHand, cpHand)
  {
    if (userHand == "paper" && cpHand == "scissor") 
    {
      setDecision("YOU LOSE!")
      computerScore(score.computerScore +1)
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="none";
      document.querySelector('.pcHand div').style.boxShadow = "34px 5px 70px green";
      document.querySelector('.userHand div').style.boxShadow = "34px 5px 70px red";
    }
    if (userHand == "paper" && cpHand == "stone") {
      setDecision("YOU WIN!");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="block"
      setScore(score.userScore +1);
      document.querySelector('.userHand div').style.boxShadow = "34px 5px 70px green";
      document.querySelector('.pcHand div').style.boxShadow = "34px 5px 70px red";
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
      document.querySelector('.referee h2').textContent="";
      document.getElementById('next').style.display="none";
      document.querySelector('.userHand div').style.boxShadow = "";
      document.querySelector('.pcHand div').style.boxShadow = "";
    }
    if (userHand == "stone" && cpHand == "scissor") {
      setDecision("YOU WIN!");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="block"
      setScore(score.userScore +1);
      document.querySelector('.userHand div').style.boxShadow = "34px 5px 70px green";
      document.querySelector('.pcHand div').style.boxShadow = "34px 5px 70px red";
    }
    if (userHand == "stone" && cpHand == "paper") {
      setDecision("YOU LOSE!");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      computerScore(score.computerScore +1)
      document.getElementById('next').style.display="none";
      document.querySelector('.pcHand div').style.boxShadow = "34px 5px 70px green";
      document.querySelector('.userHand div').style.boxShadow = "34px 5px 70px red";
    }
    if (userHand == "stone" && cpHand == "stone") {
      setDecision("It's a tie!");
      document.querySelector('.referee h2').textContent="";
      document.getElementById('next').style.display="none"
      document.querySelector('.userHand div').style.boxShadow = "";
      document.querySelector('.pcHand div').style.boxShadow = "";
    }
    if (userHand == "scissor" && cpHand == "scissor") {
      setDecision("It's a tie!");
      document.getElementById('next').style.display="none"
      document.querySelector('.referee h2').textContent="";
      document.querySelector('.userHand div').style.boxShadow = "";
      document.querySelector('.pcHand div').style.boxShadow = "";
    }
    if (userHand == "scissor" && cpHand == "stone") {
      document.getElementById('next').style.display="none"
      setDecision("YOU LOSE!");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      computerScore(score.computerScore +1);
      document.querySelector('.pcHand div').style.boxShadow = "34px 5px 70px green";
      document.querySelector('.userHand div').style.boxShadow = "34px 5px 70px red";
    }
    if (userHand == "scissor" && cpHand == "paper") {
      setDecision("YOU WIN!");
      document.querySelector('.referee h2').textContent="AGAINST PC";
      document.getElementById('next').style.display="block"
      setScore(score.userScore +1);
      document.querySelector('.userHand div').style.boxShadow = "34px 5px 70px green";
      document.querySelector('.pcHand div').style.boxShadow = "34px 5px 70px red";
    
    }
  };
  
  const setDecision=(decision)=>{
    document.querySelector('.referee h1').textContent=decision;
  }
  
  const restartGame=()=>{
    let contest=document.querySelector('.contest');
    contest.style.display="none";

    let lower=document.querySelector('.lower')
    lower.style.display="flex";

    document.getElementById('next').style.display="none"
  }

  
  let next=document.getElementById('next')
  next.addEventListener("click",()=>{
    document.querySelector('.container').style.display="none"
    document.querySelector('.hurray').style.display="block";
  })

  function restartGameOnFinalPage(){
    document.querySelector('.container').style.display="flex"
    document.querySelector('.hurray').style.display="none";
    let lower=document.querySelector('.lower')
    lower.style.display="flex"

    let contest=document.querySelector('.contest');  
    contest.style.display="none";
    
    document.getElementById('next').style.display="none";
  }

  const setScore = (newScore) => {
    score.userScore = newScore;
    document.querySelector("#myScore h1").innerHTML = newScore;
    localStorage.setItem("score", JSON.stringify(score))
  }

  const computerScore = (newScore) => {
    score.computerScore = newScore;
    document.querySelector("#comScore h1").innerHTML = newScore;
    localStorage.setItem("score", JSON.stringify(score))
  }

  let ruleOfHurray=document.getElementById('ruleOfHurray')
let rulesOfHurray=document.getElementById('rulesOfHurray')
let crossOfHurray=document.getElementById('crossOfHurray');

ruleOfHurray.addEventListener("click", () => {
    rulesOfHurray.style.display = "block";
  });
crossOfHurray.addEventListener("click",()=>{   
    rulesOfHurray.style.display="none";
  });

  



  