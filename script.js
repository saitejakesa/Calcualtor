let input=document.querySelector(".input")
let result=document.querySelector("#result")


let totalvalue=Array.from(document.querySelectorAll(".button"))
totalvalue.map(button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'C':
                result.innerText='';
                input.innerText='';
                break;
            case '←':
                if(input.innerText){
                    input.innerText=input.innerText.slice(0,-1)
                }
                break;
            case '=':
                result.innerText+=eval(input.innerText);    
            default:
                input.innerText+=e.target.innerText;
        }


    });

});


