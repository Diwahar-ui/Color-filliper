const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap =  document.getElementById("wrap")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener("click",function(){
        let hexColor = "#"
        for( let i =0;i<6;i++){
            hexColor += hexRandom()
        }
        wrap.style.backgroundColor = hexColor
       colortext.innerHTML = hexColor


})


function  hexRandom(){
   const randomIndex = Math.floor(Math.random()*16)
  console.log(hex[randomIndex])
  return hex[randomIndex]

}