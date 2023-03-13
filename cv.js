const cvContainer = document.querySelector(".cv-container");
const popup = document.querySelector(".popup");
const formPopupBtn = document.getElementById("Mail");
const formRemoveBtn = document.getElementById("backBtn");


// Handle popup
const handleDisappear = ()=>{
  cvContainer.style.animationName = "disappear";
  cvContainer.style.animationDuration = "300ms";
  setTimeout(()=>{
    cvContainer.style.display = "none"
  }, 300)
};
const handleAppear = ()=>{
  popup.style.animationName = "appear";
  popup.style.animationDuration = "303ms";
  popup.style.display = "block";

};
const formTrigger = ()=>{
  handleDisappear();
  setTimeout(handleAppear, 315)
};


// Remove popup
const handlePopupDisappear = ()=>{
  popup.style.animationName = "disappear";
  popup.style.animationDuration = "300ms";
  setTimeout(()=>{
    popup.style.display = "none"
  }, 300)
}
const handleCVContainerAppear = ()=>{
  cvContainer.style.animationName = "appear";
  cvContainer.style.animationDuration = "303ms";
  cvContainer.style.display = "flex";
}
const CVContainerTrigger = ()=>{
  handlePopupDisappear();
  setTimeout(handleCVContainerAppear, 315)
}



formPopupBtn.addEventListener("click", formTrigger);
formRemoveBtn.addEventListener("click", CVContainerTrigger);