import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {BasePageAnimationDirection} from "./animationTypes";

const transitionTime = "600ms ";
const transitionEase = "cubic-bezier(.67,.01,.36,.99)";
const transitionEase2 = "cubic-bezier(.76,0,.41,.99)";
const transitionEaseZoom = "cubic-bezier(.86,.01,.85,.59)";

const scaleMin = 0.7;
const scaleMax = 2;

export const basePageAnimations = trigger("basePageAnimation", [
  state(
    BasePageAnimationDirection.DOWN,
    style({
      width: "100%",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    })
  ),
  state(
    BasePageAnimationDirection.UP,
    style({
      width: "100%",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    })
  ),
  state(
    BasePageAnimationDirection.ZOOM_IN,
    style({
      width: "100%",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    })
  ),
  state(
    BasePageAnimationDirection.ZOOM_OUT,
    style({
      width: "100%",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    })
  ),
  state(
    BasePageAnimationDirection.LEFT,
    style({
      width: "100%",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    })
  ),
  state(
    BasePageAnimationDirection.RIGHT,
    style({
      width: "100%",
      position: "absolute",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    })
  ),
  state(BasePageAnimationDirection.FADE, style({ width: "100%", left: 0, opacity: 1 })),

  // ^^^^^^
  transition("up => void", [
    // ^^ leave ^^
    style({
      opacity: 1,
      top: 0,
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          top: "-100vh",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("void => up", [
    // ^^ enter ^
    style({
      opacity: 1,
      top: "100vh",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          top: "0",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),

  // vvvvvvvv
  transition("down => void", [
    // vv leave vv
    style({
      opacity: 1,
      top: "0px",
    }),
    group([
      animate(
        transitionTime + transitionEase2,
        style({
          opacity: 1,
          top: "100vh",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("void => down", [
    // vv enter vv
    style({
      opacity: 1,
      top: "-100vh",
    }),
    group([
      animate(
        transitionTime + transitionEase2,
        style({
          opacity: 1,
          top: "0px",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),

  // <<<<<<<<<<
  transition("void => left", [
    // << enter <<
    style({
      opacity: 1,
      transform: "translateX(100%)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("left => void", [
    // << leave <<
    style({
      opacity: 1,
      transform: "translateX(0)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform: "translateX(-100%)",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),

  // >>>>>>>>>>
  transition("void => right", [
    // >> enter >>
    style({
      opacity: 1,
      transform: "translateX(-100%)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("right => void", [
    // >> leave >>
    style({
      opacity: 1,
      transform: "translateX(0)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform: "translateX(100%)",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),

  // <<  __  >>
  transition("void => zoom-in", [
    // << zoom-in enter >>
    style({
      opacity: 0,
      transform:  "scale("+scaleMin+")",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform: "scale(1)",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("zoom-in => void", [
    // << zoom-in leave >>
    style({
      opacity: 1,
      transform: "scale(1)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 0,
          transform: "scale("+scaleMax+")",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),

  // >>  __  <<
  transition("void => zoom-out", [
    // >> zoom-out enter <<
    style({
      opacity: 0,
      transform:  "scale("+scaleMax+")",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform: "scale(1)",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("zoom-out => void", [
    // >> zoom-out leave <<
    style({
      opacity: 1,
      transform: "scale(1)",
    }),
    animate(
      transitionTime + transitionEase,
      style({
        opacity: 0,
        transform: "scale("+scaleMin+")",
      })
    ),
  ]),

  // ( (  __  ) )
  transition("void => fade", [
    // ( fade enter )
    style({
      opacity: 0,
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("fade => void", [
    // ( fade leave )
    style({
      opacity: 1,
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 0,
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),


  // rotate clockwise
  transition("void => rotateClockwise", [
    // >> zoom-out enter <<
    style({
      opacity: 1,
      transform:  "translateX(-100vw) scale(0.5) rotate(-90deg)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform:  "translateX(0) scale(1) rotate(0) ",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("rotateClockwise => void", [
    // >> zoom-out leave <<
    style({
      opacity: 0.7,
      transform:  "translateX(0) scale(1) rotate(0deg)",
    }),
    animate(
      transitionTime + transitionEase,
      style({
        opacity: 0.3,
        transform:  "translateX(100vw) scale(0.8) rotate(90deg)",
      })
    ),
  ]),

  // rotate counte clockwise
  transition("void => rotateCounterClockwise", [
    // >> zoom-out enter <<
    style({
      opacity: 1,
      transform:  "translateX(100vw) scale(0.8) rotate(90deg)",
    }),
    group([
      animate(
        transitionTime + transitionEase,
        style({
          opacity: 1,
          transform:  "translateX(0) scale(1) rotate(0) ",
        })
      ),
      query("@*", animateChild(), { optional: true }),
    ]),
  ]),
  transition("rotateCounterClockwise => void", [
    // >> zoom-out leave <<
    style({
      opacity: 0.7,
      transform:  "translateX(0) scale(1) rotate(0deg)",
    }),
    animate(
      transitionTime + transitionEase,
      style({
        opacity: 0.3,
        transform:  "translateX(-100vw) scale(0.8) rotate(-90deg)",
      })
    ),
  ]),

]);
