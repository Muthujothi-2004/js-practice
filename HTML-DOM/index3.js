const div =document.querySelector(".container")
const button= document.querySelector("button")
const ul=document.getElementById("ulist")
const Rebutton =document.querySelector(".Rebutton")
const high=document.querySelector(".high")

button.addEventListener("click", ()=>{
 const A=document.createElement("li")
 A.textContent="orange";
 A.classList.add("addingC")
 ul.appendChild(A) 

});

Rebutton.addEventListener("click",()=>{
const remove= document.querySelector(".addingC")
remove.remove();
});

high.addEventListener("click",()=>{
const li1=document.querySelector(".color")
const  li2=document.querySelector(".color2")
const  li3=document.querySelector(".color3")
li1.style.backgroundColor="red";
li2.style.backgroundColor="red";
li3.style.backgroundColor="red";

});

// const link=document.createElement("a")
// link.href=" https://chatgpt.com/"
// link.textContent="click here";

const link=document.createElement("a");
link.href="www.youtube.com";
link.textContent="click";
div.appendChild(link)

const img=document.createElement("img")
img.src=""








