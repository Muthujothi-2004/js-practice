const div =document.querySelector(".container")
const button= document.querySelector("button")
const ul=document.getElementById("ulist")
const Rebutton =document.querySelector(".Rebutton")
const high=document.querySelector(".high")
const nam=document.getElementById("name")
const lists=document.querySelectorAll(".color")
const h=document.getElementById("colors")



// button.addEventListener("click", ()=>{
//  const A=document.createElement("li")
//  A.textContent="orange";
//  A.classList.add("addingC")
//  ul.appendChild(A) 

// });

button.addEventListener("click", () => {
    const inp = document.getElementById("name");
    const li = document.createElement("li");
    li.textContent = inp.value; 
    li.classList.add("addingC")
    ul.appendChild(li); 
    button.disabled=true;
});

Rebutton.addEventListener("click",()=>{
 lists.forEach(list=>list.textContent)
});

// Rebutton.addEventListener("click", () => {
//     const removes = document.querySelectorAll("#ulist li"); // Select all li elements
//     removes.forEach((remove) => console.log(remove.textContent));
// });


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
link.setAttribute("href", "https://www.example.com")
link.textContent="click";
div.appendChild(link)

const img=document.createElement("img")
img.setAttribute("src","")









