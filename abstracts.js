document.querySelectorAll(".publication-list li").forEach((item) => {
  const title = item.querySelector(".pub-title");
  const abstractPanel = item.querySelector(".pub-abstract");

  if (!title || !abstractPanel) {
    return;
  }

  title.addEventListener("mouseenter", () => {
    item.classList.add("abstract-open");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("abstract-open");
  });

  title.addEventListener("focus", () => {
    item.classList.add("abstract-open");
  });

  title.addEventListener("blur", () => {
    item.classList.remove("abstract-open");
  });
});
