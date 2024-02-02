console.log("i am successfully added.");
const calcDiv = document.getElementById("calc-div");

const handleBtnClk = (e) => {
  if (
    calcDiv.childNodes.length == 3 &&
    calcDiv.childNodes[1].innerText == "0.0"
  ) {
    calcDiv.innerHTML = ``;
    console.log("object");
  }
  console.log(calcDiv.childNodes.length);
  console.log("function activate");
  const clickedBtn = e.innerText;
  console.log(clickedBtn);
  const x = calcDiv.innerHTML;
  const span = document.createElement("span");
  span.innerText = clickedBtn;

  calcDiv.appendChild(span);
};

const handleResult = () => {
  console.log("this is result");
  console.log(calcDiv);
};
