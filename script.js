const header = document.querySelector("h1");
const buttonOne = document.getElementById("btn1");

buttonOne.addEventListener("click", () => {
  let current = header.textContent;
  let headerUpper = header.textContent.toUpperCase();
  if (current === headerUpper) {
    current = header.textContent.toLowerCase();
    header.textContent = current;
    console.log(current);
    }
  else {
    current = header.textContent.toUpperCase();
    header.textContent = current;
    console.log(current);
  }
})

