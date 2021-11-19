//jshint esversion:6
let  inputBtn = document.getElementById('input-btn') ;
const inputEl = document.getElementById('input-el') ;
const deleteBtn = document.getElementById('delete-btn');
let tabBtn  = document.getElementById('tab-btn');
const ulEl = document.getElementById('ul-el') ;
let url = [] ;

  console.log(  Boolean(inputEl.value));

let urlFromLocalStorage = JSON.parse(localStorage.getItem('url'));

    if(urlFromLocalStorage ) {
        
      url  = urlFromLocalStorage  ;
      renderurl(url);
    }

//function to delete all saved url's
 deleteBtn.addEventListener('dblclick',()=>{
  
   localStorage.clear();
   url = [] ;
   renderurl(url) ;
 }) ;

 

   tabBtn.addEventListener('click',function(e){
      
    //  console.log(chrome.tabs.query);
  
   
     chrome.tabs.query({active: true, currentWindow: true},function(tabs){
       console.log(tabs);
       url.push(tabs[0].url) ;
       localStorage.setItem('url',JSON.stringify(url)) ;
       renderurl(url);
      }) ;
      
    });
  

  inputBtn.addEventListener('click',function(){
        if(inputBtn.value){
        }

          url.push(inputEl.value) ;
          inputEl.value = '' ;
          localStorage.setItem('url',JSON.stringify(url)) ;  
          renderurl(url);

       //  localStorage.clear() ;
 
}) ;

function renderurl(url){
  ulEl.innerHTML = '';
  let listItems = '';
  for (let i = 0; url.length > i ; i++){

    listItems += `<li> <a  target='_blank' href='${url[i]}'> ${url[i]} </a> </li>` ;
        ulEl.innerHTML = listItems ;
      }
    }
 
    
    