const form = document.querySelector(".main__form")
const input = document.querySelector(".main__input")
const submit = document.querySelector(".main__submit")
const title = document.querySelector(".main__title")
const btn = document.querySelector(".main__btn")

form.addEventListener("submit", ()=>{
    event.preventDefault()
})



function inputButton() {
    let val = input.value;
    if (val.trim() !== "") {
      TEL_NUMBERS.unshift(val);
      input.value = "";
    }
}
console.log(inputButton());
  const TEL_NUMBERS = [
    "+998 97 005 87 47",
    "+998 91 013 87 47",
    "+998 99 444 44 44",
    "+998 90 987 09 87",
    "+998 99 960 99 60",
    "+998 91 462 82 72",
    "+998 94 562 54 36",
    "+998 91 224 60 48",
    "+998 99 797 57 67",
    "+998 95 019 06 68",
    "+998 50 009 16 21",
    "+998 97 005 87 47",
  ];

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    inputButton();
  });

  btn.addEventListener("click", () => {
    let inputvalue = input.value;

    if (inputvalue.trim() !== "") {
      TEL_NUMBERS.unshift(inputvalue);
    }

    console.log(TEL_NUMBERS);

    btn.setAttribute("disabled", true);

    let interval = setInterval(() => {
      let index = Math.floor(Math.random() * TEL_NUMBERS.length);
      title.textContent = TEL_NUMBERS[index];
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      btn.removeAttribute("disabled");
      let finalIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
      title.textContent = TEL_NUMBERS[finalIndex];
    //   title.textContent = TEL_NUMBERS[0];
    }, 2500);
  });


