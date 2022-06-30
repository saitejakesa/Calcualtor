let input=document.querySelector(".input")
let result=document.querySelector("#result")


let totalvalue=Array.from(document.querySelectorAll(".button"))
totalvalue.map(button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'C':
                result.value='';
                input.innerText='';
                break;
            case '←':
                if(input.innerText){
                    input.innerText=input.innerText.slice(0,-1)
                }
                break;
            case '=':
                    result.value=eval(input.innerText)
                    input.innerText=''
                break;    
            default:
                input.innerText+=e.target.innerText;
                result.value='';
        }


    });

});

