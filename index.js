const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector("body");
const button = document.querySelector("#random-button");
const code = document.getElementById("code");

const hexChars=[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];

let description = "background: linear-gradient( 90deg,";

input1.addEventListener("input", () => {
  let firstColor = input1.value;
  body.style.background = `linear-gradient(90deg,
    ${input2.value},
    ${firstColor})`;
    code.innerHTML=description+firstColor+", "+input2.value+" );";
});
input2.addEventListener("input", () => {
  let secondColor = input2.value;
  body.style.background = `linear-gradient(90deg,
    ${secondColor},
    ${input1.value})`;
    code.innerHTML=description+input1.value+", "+secondColor+" );";
});
button.addEventListener("click",()=>{
    let value1 = "#";
    let value2 = "#";
    for(let i =0;i<6;i++){
        value1+=hexChars[Math.floor(Math.random()*hexChars.length)];
        value2+=hexChars[Math.floor(Math.random()*hexChars.length)];
    } 
    console.log(value1,value2);
    input1.value=value1;
    input2.value=value2;
    body.style.background = `linear-gradient(90deg,
    ${input2.value},
    ${input1.value})`;
    code.innerHTML=description+input2.value+", "+input1.value+" );";
    input1.style.border=`2px solid ${input2.value}`;
    input2.style.border=`2px solid ${input1.value}`;
})