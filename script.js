let inputValue = document.getElementById('entervalue');
let btn = document.querySelectorAll('button');
 let arrayBtn = Array.from(btn);
 let string =""; 
 
 arrayBtn.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
if(e.target.innerHTML==="="){
  try{
    string= eval(string).toString();
   inputValue.value= string;
   
}
catch(error){
  inputValue.value="Error"
  string="";
}
}
else if(e.target.innerHTML==="DEL"){
   string = string.substring(0, string.length-1);
      inputValue.value = string;

}
else if(e.target.innerHTML==="C"){
   inputValue.value ="";
   string="";
}
else{
   string += e.target.innerHTML;
   inputValue.value= string;
}
  })
 })
 