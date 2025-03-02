let btn=document.querySelector("button");
let rbox=document.querySelector(".res");
let c=0;
let reset=document.querySelector(".reset");
btn.addEventListener("click",()=>{
    c=c+1;
    rbox.innerText=`u clicked ${c} times`;
    if(c===10) {
        rbox.innerText=`U reached 10 times`;
        rbox.style.backgroundColor="green";
        rbox.style.color="white";

    }
})
reset.addEventListener("click",()=>{
    c=0;
    rbox.innerText="u clicked 0 times";
    rbox.style.backgroundColor="";
    rbox.style.color="";
    
})
