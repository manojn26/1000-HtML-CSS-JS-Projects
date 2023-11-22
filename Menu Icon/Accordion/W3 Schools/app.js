let acc = document.getElementsByClassName("accordion");
let spanElement = document.getElementsByTagName("span");
// console.log(spanElement);

for (let i = 0; i < acc.length; i++) {
  //   console.log(acc[i].nextElementSibling);

  acc[i].addEventListener("click", () => {
    acc[i].classList.toggle("active");
    // Hiding and showing panel
    let panel = acc[i].nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      spanElement[i].textContent = "+";
    } else {
      panel.style.display = "block";
      spanElement[i].textContent = "-";
    }
  });
}
