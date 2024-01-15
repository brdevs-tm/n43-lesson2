const inputs = document.querySelectorAll("input");
const checkBtn = document.querySelector(".login-user");

checkBtn.addEventListener("click", () => {
  let allInputsFilled = true;

  inputs.forEach((el) => {
    if (!el.validity.valid || el.value.trim() === "") {
      allInputsFilled = false;
    }
  });

  if (allInputsFilled) {
    window.alert("Ajoyib!");
  } else {
    window.alert("Iltimos Inputlarni to'ldiring");
  }
});
