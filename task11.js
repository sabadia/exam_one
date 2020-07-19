function setToggleElement(element) {
  return function (isDisabled) {
    console.log("yes");
    isDisabled
      ? element.setAttribute("disabled", isDisabled)
      : element.removeAttribute("disabled");
  };
}
const toggle = setToggleElement(document.getElementById("btn"));

toggle(true);
toggle(false);
