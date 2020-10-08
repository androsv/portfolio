console.log("nothing to see here......");
const langSelector = document.querySelector("#lang-selector");
const langArr = [
  "Javascript",
  "React",
  "Node",
  "Angular",
  "Css",
  "Html",
  "Golang",
  "Vue",
];
let num = 0;
const changeText = () => {
  if (num >= langArr.length) {
    num = 0;
  }
  langSelector.textContent = langArr[num];
  num++;
};
const change = setInterval(changeText, 1000);
