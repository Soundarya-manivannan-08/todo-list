let input = document.querySelector("input")
let btn = document.querySelector("button")
let ol = document.querySelector("ol")

btn.addEventListener("click",()=>{
  let inputValue=input.value;
  
  let li=document.createElement('li')
  
  li.innerHTML=inputValue+` <button class="deleteValue">clear</button>`

  ol.prepend(li) 

  let deleteValue=li.querySelector(".deleteValue")

  deleteValue.addEventListener("click",()=>{
     li.remove()
  })
  
})