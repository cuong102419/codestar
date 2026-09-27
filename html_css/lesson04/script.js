const input = document.querySelector("#password");
const btn = document.querySelector("#toggle-password");

btn.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Ẩn";
  } else {
    input.type = "password";
    btn.textContent = "Hiện";
  }
});
