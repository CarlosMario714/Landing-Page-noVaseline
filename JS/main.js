const scrollOfset = 200

const scrollElements = document.querySelectorAll(".slide-container")

// scrollElements.forEach((el) => {
//   console.log(el.getBoundingClientRect().top)
// })

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

// const scrollElements = document.querySelector(".slide-container")

// console.log(scrollElements)

//  window.addEventListener("scroll", () => {
//    console.log("hola")
//   scrollElements.classList.add(("scrolled"))
// })