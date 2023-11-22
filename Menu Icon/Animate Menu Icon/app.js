const containerElement = document.querySelector(".container");
const tog = document.querySelectorAll(".t");

containerElement.addEventListener("click", (event) => {
  //   event.target.classList.toggle("change"); --> individually it worked
  //   console.log("Fucked");
  //   tog.classList.toggle("change");
  for (const iterator of tog) {
    iterator.classList.toggle("change");
  }
});
