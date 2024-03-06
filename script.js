  const header = document.querySelector("h1");
  const buttonOne = document.getElementById("btn1");
  const uList = document.querySelector("ul");
  const buttonTwo = document.getElementById("btn2");

  let versionControl = ["git add .", "git commit -m", "git push origin `main`", "git status"];

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

  buttonTwo.addEventListener("click", () => {
    for (let i = 0; i < versionControl.length; i++) {
      let newLi = document.createElement("li");
      newLi.textContent = versionControl[i];
      uList.appendChild(newLi);
    }
  })