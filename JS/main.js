const scrollOfset = 50

const scrollElements = document.querySelectorAll(".js-scroll")

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const elementOutOfViewDown = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};


const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled")
}


const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
  
  if (elementInView(el, scrollOfset)) {
    displayScrollElement(el);
  } else if (elementOutOfViewDown(el)) {
    hideScrollElement(el);
  } 
})
}

window.addEventListener("scroll", () => {
  handleScrollAnimation()
})