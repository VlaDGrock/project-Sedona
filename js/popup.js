
  let link = document.querySelector(".button-search");
  let popup = document.querySelector(".modal-search");
  let close = document.querySelector(".modal-close");


  let form = popup.querySelector("form");

  let date = popup.querySelector("[name=date]");

  let datetwo = popup.querySelector("[name=datetwo]");
  
  let storage = localStorage.getItem("date")


  link.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    date.focus();
    if (storage) {
      date.value = storage;
    }
  });

  

  form.addEventListener ("submit", function(evt) {
    if (!date.value || !datetwo.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("date", date.value);
    }
    
  });


  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt){
   if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")){
      popup.classList.remove("modal-show");
    }
   }

  });

