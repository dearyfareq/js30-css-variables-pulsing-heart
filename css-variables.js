// capture the input element
const input = document.querySelector("input");

function update() {
  // take the root, style, set property of --(variable name), we used the element naming, matching the css variable name to target it
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  console.log(this.name);
}

// listen to ANY form of change, be it moving,mouse down and up
input.addEventListener("mousemove", update);
input.addEventListener("mousedown", update);
input.addEventListener("mouseup", update);
