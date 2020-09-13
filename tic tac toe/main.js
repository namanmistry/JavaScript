let counter=0;

document.getElementById('gameBoard').addEventListener('click',function(e){
    let number=parseInt(e.target.id);
    
    if(0<=number<=8){
        if(counter%2==0){
        document.getElementById(number).innerText="o";
        }
        else{
        document.getElementById(number).innerText="x";
        }
        counter=counter+1;

    }
    
});

document.getElementById('reset').addEventListener('click',function(){
    for(i=0;i<=8;i++){
        document.getElementById(i).innerHTML="#";
    }
});

document.getElementById('gameBoard').addEventListener('click',function(){
    let array=[];
    
    for(i=0;i<=8;i++){
        array[i]=document.getElementById(i).innerHTML;
    }
    if(array[0]==array[1] && array[1]==array[2] && array[0]!="#"){
        alert(`player ${array[0]} won the game`);
    }
    else if((array[3]==array[4] && array[4]==array[5]) &&  array[3]!="#")
    {
        alert(`player ${array[3]} won the game`);
    }
    else if((array[6]==array[7] && array[7]==array[8]) &&  array[6]!="#"){
        alert(`player ${array[6]} won the game`);
    }

    if(array[0]==array[3] && array[3]==array[6] && array[0]!="#"){
        alert(`player ${array[0]} won the game`);
    }
    else if((array[1]==array[4] && array[4]==array[7]) &&  array[1]!="#")
    {
        alert(`player ${array[3]} won the game`);
    }
    else if((array[2]==array[5] && array[5]==array[8]) &&  array[2]!="#"){
        alert(`player ${array[6]} won the game`);
    }

    if(array[0]==array[4] && array[4]==array[8] && array[0]!="#"){
        alert(`player ${array[0]} won the game`);
    }
    else if((array[2]==array[4] && array[4]==array[6]) &&  array[2]!="#")
    {
        alert(`player ${array[3]} won the game`);
    }  
})

