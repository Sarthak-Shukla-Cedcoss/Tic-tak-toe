winning1 = ["0","1","2"] ;
winning2 = ["3","4","5"] ;
winning3 = ["6","7","8"] ;
winning4 = ["0","3","6"] ;
winning5 = ["1","4","7"] ;
winning6 = ["2","5","8"] ;
winning7 = ["0","4","8"] ;
winning8 = ["2","4","6"] ;
var playerOne = 1;
var playerTwo = 0;
var arrOne = [];
var arrTwo = [];
var win=0;
function set(clicked_id){
    if(playerOne == 1){
        document.body.style.backgroundColor = "#FF615F";
        document.getElementById(clicked_id).innerHTML="<img src='images/o.png'>";
        document.getElementById(clicked_id).onclick = "";
        arrOne.push(clicked_id);
        // console.log(arrOne);
        check();
        playerOne = 0;
        
    }
    else{
        document.body.style.backgroundColor = "#3BC6F3";
        document.getElementById(clicked_id).innerHTML="<img src='images/cross.png'>";
        document.getElementById(clicked_id).onclick = "";
        arrTwo.push(clicked_id);
        // console.log(arrTwo);
        check1();
        playerOne = 1;
    }
}
function restart(){
    location.reload();
}
function check(){    
    const result1 = winning1.every(val => arrOne.includes(val));
    const result2 = winning2.every(val => arrOne.includes(val));
    const result3 = winning3.every(val => arrOne.includes(val));
    const result4 = winning4.every(val => arrOne.includes(val));
    const result5 = winning5.every(val => arrOne.includes(val));
    const result6 = winning6.every(val => arrOne.includes(val));
    const result7 = winning7.every(val => arrOne.includes(val));
    const result8 = winning8.every(val => arrOne.includes(val));
    if(result1==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result2==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result3==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result4==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result5==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result6==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result7==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
    else
    if(result8==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER ONE WINS ";
        document.getElementById("win").style.display="block";
        console.log("player1wins");
    }
}

function check1(){    
    const result11 = winning1.every(val => arrTwo.includes(val));
    const result12 = winning2.every(val => arrTwo.includes(val));
    const result13 = winning3.every(val => arrTwo.includes(val));
    const result14 = winning4.every(val => arrTwo.includes(val));
    const result15 = winning5.every(val => arrTwo.includes(val));
    const result16 = winning6.every(val => arrTwo.includes(val));
    const result17 = winning7.every(val => arrTwo.includes(val));
    const result18 = winning8.every(val => arrTwo.includes(val));
    if(result11==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result12==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result13==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result14==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result15==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result16==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result17==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
    else
    if(result18==true)
    {   
        document.getElementById("grid").style.display="none";
        document.getElementById("win1").innerHTML="PLAYER TWO WINS ";
        document.getElementById("win").style.display="block";
        console.log("player2wins");
    }
}



    // console.log(result1);
    // console.log(result2);
    // console.log(result3);
    // console.log(result4);
    // console.log(result5);
    // console.log(result6);
    // console.log(result7);
    // console.log(result8);    
