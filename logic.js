let btns = document.querySelectorAll('.btn');
let resbtn = document.querySelector('#reset-btn')
let msg = document.querySelector('#msg-div-heading');
let turnO = true; //playerX playerO
resbtn.addEventListener("click",()=>{
    resetGame();
});
let count =0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO = true;
    enableBtns();
    count = 0;
    document.querySelector("#msg-div").style.display = "none";
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        // console.log("click btn");
        if(turnO){
            btn.style.color = "green";
            btn.innerText = "O";
            turnO = false;
            count++;
        }
        else{
            btn.style.color = "red";
            btn.innerText = "X";
            turnO = true;
            count ++;
        }
        btn.disabled = true;
        if(count<=9)
        checkWinner();
        else{
          disableBtns();
          document.querySelector("#msg-div").style.display = "block";
          msg.innerText = "Draw";
          
        }

        
    })
});
const disableBtns = ()=>{
    for (let btn of btns) {
        btn.disabled =true;
    }
}
const enableBtns = ()=>{
    for (let btn of btns) {
        btn.disabled =false;
        btn.innerText = "";
    }
}


const checkWinner =()=>{
    for(let pattern of winPattern){
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val &&pos2val===pos3val){
                msg.style.fontSize = "30px"
                disableBtns();
                msg.innerText = "Winner player"+pos1val
                document.querySelector('#msg-div').style.display = "block"               
            }
            
        }
    }
};

