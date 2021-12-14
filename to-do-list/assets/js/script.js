function adicionar() {  
  let text = document.getElementById('texto').value;
  let list = document.getElementById('lista').innerHTML;

  list += "<input id='caixa' type='checkbox' onclick='checkbox()' class='marca'>  "+ text + "<br>"  
  
  if(text == ""){
    alert('Digite sua tarefa!');
    
  }else{
    document.getElementById("lista").innerHTML = list; 
  }
  
}
//verifica se a checkbox esta marcado ou não
//caso esteja marcado(checkbox) vai riscar a tarefa, se não remove o risco;
function checkbox() {
  let caixa = document.querySelectorAll('input[type=checkbox]');
  let list = document.getElementById('lista');
  for(let i = 0;i < caixa.length; i++){
    if(caixa[i].checked == true){
      list.style.textDecoration = 'line-through';
    }else{      
      list.style.textDecoration = 'none';
    }
    
  }
  
}





