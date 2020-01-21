import gsap, { TweenMax, CSSPlugin} from "gsap/all";

 gsap.registerPlugin(CSSPlugin); // uncomment this to fix

const rafThrottle = fn => {
  let ticking = false;

  return (...props) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        fn(...props);
        ticking = false;
      });

      ticking = true;
    }
  };
};

class CustomCursor {
  // get everything off the screen initially
  posX = -20;

  posY = -20;

  mouseX = -20;

  mouseY = -20;

  constructor() {
    this.cursor = document.querySelector(".cursor--primary");
    this.follower = document.querySelector(".cursor--follower");
    this.links = document.querySelectorAll("a");

    this.init();
  }

  init = () => {
    TweenMax.to({}, 16, {
      repeat: -1,
      onUpdate: () => {
        this.posX += (this.mouseX - this.posX) / 9;
        this.posY += (this.mouseY - this.posY) / 9;

        TweenMax.set(this.follower, {
          x: this.posX,
          y: this.posY
        });

        if (this.cursor) {
          TweenMax.set(this.cursor, {
            x: this.mouseX,
            y: this.mouseY
          });
        }
      }
    });

    document.addEventListener(
      "mousemove",
      rafThrottle(e => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      }),
      { passive: true }
    );
  };
}

window.addEventListener("DOMContentLoaded", () => {
  window.cursor = new CustomCursor();
});
