import gsap from "gsap";

const cards = document.querySelectorAll(".card-member");

const tl = gsap.timeline({ defaults: { duration: 1 } });

cards.forEach((e) => {
  tl.from(
    e,
    {
      opacity: 0,
      y: -100,
    },
    "<0.2"
  );
});
