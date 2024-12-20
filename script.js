let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");


s1.addEventListener("mouseenter",()=>{
  let r = Math.floor(Math.random()*100);
  s1.innerHTML=`<h1>${r}</h1>`;
})
s1.addEventListener("mouseleave",()=>{
  s1.innerHTML="<h1>1</h1>";
})
s1.addEventListener("dblclick",()=>{
  let r1 = Math.floor(Math.random()*256);
  let r2 = Math.floor(Math.random()*256);
  let r3 = Math.floor(Math.random()*256);
  s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})


let clr = "red";
s2.addEventListener("mouseenter",()=>{
  if(clr=="red"){
    s2.style.backgroundColor="red";
    clr="green";
  }
  else if(clr=="green"){
    s2.style.backgroundColor="green";
    clr="blue";
  }
  else{
    s2.style.backgroundColor="blue";
    clr="red";
  }
})
s2.addEventListener("mouseleave",()=>{
  s2.style.backgroundColor="white";
})


s3.addEventListener("mouseenter",()=>{
  let r1 = Math.floor(Math.random()*256);
  let r2 = Math.floor(Math.random()*256);
  let r3 = Math.floor(Math.random()*256);
  s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave",()=>{
  s3.style.backgroundColor="white";
})


s4.addEventListener("mouseenter",()=>{
  let r1 = Math.floor(Math.random()*256);
  let r2 = Math.floor(Math.random()*256);
  let r3 = Math.floor(Math.random()*256);
  s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
  s2.style.backgroundColor = `rgb(${r2},${r3},${r1})`;
  s3.style.backgroundColor = `rgb(${r3},${r1},${r2})`;
})
s4.addEventListener("mouseleave",()=>{
  s1.style.backgroundColor="white";
  s2.style.backgroundColor="white";
  s3.style.backgroundColor="white";
})


let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",(a)=>{
    crsr.style.left=a.x+"px";
    crsr.style.top=a.y+"px";
})
