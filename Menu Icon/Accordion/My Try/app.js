const firstIcon = document.querySelector(".icon-one");
const secondIcon = document.querySelector(".icon-two");
const thirdIcon = document.querySelector(".icon-three");

const firstSection = document.querySelector(".sec-one");
const secondSection = document.querySelector(".sec-two");
const thirdSection = document.querySelector(".sec-three");

let first = false;
firstIcon.addEventListener("click", () => {
  first = !first;
  if (first) {
    firstIcon.textContent = "-";
    firstSection.style.display = "block";
    return;
  }
  firstIcon.textContent = "+";
  firstSection.style.display = "none";
});
