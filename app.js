let font=document.getElementById("font");
let number=document.getElementById("number");
let bold=document.getElementById("bold");
let italic=document.getElementById("italic");
let underline=document.getElementById("underline");
let color=document.getElementById("color");
let left=document.getElementById('left');
let bgcolor=document.getElementById("bgcolor");
let container=document.getElementById("container");
let text=document.getElementById("text");


font.addEventListener("click",()=>{
   para.style.fontFamily= font.value;
})
number.addEventListener("click",()=>{
    para.style.fontSize= number.value+"px";
})
bold.addEventListener("click",()=>{
    para.style.fontWeight="bold";
})
italic.addEventListener("click",()=>{
    para.style.fontStyle="italic";
})
underline.addEventListener("click",()=>{
    para.style.textDecoration="underline";
})
color.addEventListener("input",()=>{
    para.style.color=color.value;
})
left.addEventListener('click',()=>{
    para.style.textAlign="left";
})
right.addEventListener('click',()=>{
    para.style.textAlign="right";
})
center.addEventListener('click',()=>{
    para.style.textAlign="center";
})
justify.addEventListener('click',()=>{
    para.style.textAlign="justify";
})
bgcolor.addEventListener("input",()=>{
    container.style.backgroundColor=bgcolor.value;
})
text.addEventListener("input",()=>{
    para.style.textTransform=text.value;
})