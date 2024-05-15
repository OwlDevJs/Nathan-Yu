const cursor = document.querySelector(".cursor");
const biggerCursor = document.querySelector(".bigger-cursor");
const navbar = document.querySelector(".navbar");
const hero_title = document.querySelector(".hero-title");

navbar.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - 20 + "px";
  cursor.style.top = e.pageY - 20 + "px";
  cursor.style.display = "block";
});

navbar.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

hero_title.addEventListener("mousemove", (e) => {
  biggerCursor.style.left = e.pageX - 40 + "px";
  biggerCursor.style.top = e.pageY - 40 + "px";
  biggerCursor.style.display = "block";
});

hero_title.addEventListener("mouseleave", () => {
  biggerCursor.style.display = "none";
});

function scrollToServices() {
  const services = document.querySelector(".services");
  services.scrollIntoView({ behavior: "smooth" });
}

function scrollIntoContact() {
  const contact = document.querySelector(".contact");
  contact.scrollIntoView({ behavior: "smooth" });
}
