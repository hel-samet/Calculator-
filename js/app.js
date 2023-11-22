const input = document.getElementById("display");
document.getElementById("dot").addEventListener("click", () => {
  if (input.value.includes(".")) return;
  input.value += ".";
});