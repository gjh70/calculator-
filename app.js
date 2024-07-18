let string = "";
let buttons = document.querySelectorAll('#btn');
let memory=0;

 Array.from(buttons).forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerText == '='){
        string = eval(string);
        document.querySelector('input').value =string;
    }
     else if(e.target.innerText == 'C'){
        string = "";
        document.querySelector('input').value =string;
    }

    else if(e.target.innerText == 'M+'){
          memory+= parseFloat(string || 0);
          string = "";
            document.querySelector('input').value = string;
    }

    else if (e.target.innerText == 'M-') {
        memory -= parseFloat(string || 0);
        string = "";
        document.querySelector('input').value = string;}
        else if (e.target.innerText == 'MR') {
            string = memory.toString();
            document.querySelector('input').value = string;
        }
    else{
        console.log(e.target)
string= string + e.target.innerText;
document.querySelector('input').value =string;
    }
})
 })
