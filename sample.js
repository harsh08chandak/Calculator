// let string=" ";
// let buttons= document.querySelectorAll('button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '=')
//         {
//             string=eval(string);
//             document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML == 'C')
//         {
//             string=" ";
//             document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML == 'M-')
//         {
//             string="-";
//             document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML == '%')
//         {
//             string=string+"%";
//             string="";
//             document.querySelector('input').value=string;
//         }
//         else{
//             console.log(e.target);
//             string=string+e.target.innerHTML;
//             document.querySelector('input').value=string;
//         }
//     })
    
// })

let string = " ";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
 button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '=')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == 'C')
    {
        string=" "
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '%')
    {
        let inputNumber = parseFloat(document.querySelector('input').value);
        let percentage = inputNumber * 0.01;
        string = percentage.toString();
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '$'){
        let input=parseFloat(document.querySelector('input').value);
        let dollars = input * 0.0126;
        string="$"
        string = dollars.toString();
        document.querySelector('input').value=string;
    }
    else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
 })
})