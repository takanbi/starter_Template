gsap.registerPlugin(GSDevTools, SplitText, TextPlugin, ScrollTrigger);
//jQuery
$(function () {
  // jQuery methods go here...

  let wrapper0 = $("#wrapper0");
  let heading0 = $("#heading0");
  let split0;
  let animation0 = gsap.timeline({
    id: "animation0",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.3,
  });
  function init0() {
    gsap.set(wrapper0, {autoAlpha: 1});
    split0 = new SplitText(heading0, {type: "chars"})
    animation0.from(split0.chars, {
      opacity: 0,
      y: 50,
      ease: "back(4)",
      stagger: 0.05
    },"+=0.5");
    GSDevTools.create({
      animation0: "animation0"
    });
  }
window.addEventListener("load", init0);
  // tl.from(heading, {opacity: 0, duration: 10});
});
