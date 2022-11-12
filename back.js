let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == 'Order'){
      string = eval(string);
      document.querySelector('input').value = string;
      alert(" Your order has been placed . Thanks for accepting our services  :)")
    }
    else if(e.target.innerHTML == 'Clear'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
      console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
