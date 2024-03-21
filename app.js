const items = document.querySelectorAll(".carousel1 .carousel-item1");
items.forEach((e) => {
  const slide = 5;
  let next = e.nextElementSibling;
  for (let i = 0; i < slide; i++) {
    if (!next) {
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    e.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

const items2 = document.querySelectorAll(".carousel2 .carousel-item2");
items2.forEach((e) => {
  const slide = 5;
  let next = e.nextElementSibling;
  for (let i = 0; i < slide; i++) {
    if (!next) {
      next = items2[0];
    }
    let cloneChild = next.cloneNode(true);
    e.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

const items3 = document.querySelectorAll(".carousel3 .carousel-item3");
items3.forEach((e) => {
  const slide = 5;
  let next = e.nextElementSibling;
  for (let i = 0; i < slide; i++) {
    if (!next) {
      next = items3[0];
    }
    let cloneChild = next.cloneNode(true);
    e.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
