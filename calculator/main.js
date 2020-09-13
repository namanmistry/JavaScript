let calcScreen=document.getElementById("screen");

document.addEventListener('click',function(e){
    if(e.target.parentElement.className=='calc-button-row' && e.target.classList.item(2)!=='nottoshow'){
        let key=(e.target.innerHTML);
        calcScreen.innerHTML+=key;
    }
    if(e.target.id=="equal"){
        let ans=eval(calcScreen.innerHTML);
        calcScreen.innerHTML=ans;
    }
    if(e.target.classList.item(2)=='nottoshow'){
        if(e.target.id=="clear"){
            calcScreen.innerHTML="";
        }
        if(e.target.id=="back"){
            let newString=calcScreen.innerHTML.slice(0,-1);
            calcScreen.innerHTML=newString;
        }
    }
});