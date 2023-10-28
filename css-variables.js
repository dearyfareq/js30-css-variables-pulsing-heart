const input = document.querySelector("input");

function update() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  console.log(this.name);
}

input.addEventListener("mousemove", update);
input.addEventListener("mousedown", update);
input.addEventListener("mouseup", update);
