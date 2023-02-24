import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Subject, timer} from "rxjs";
import {BasePageAnimationDirection} from "../components/animation-base/animationTypes";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public animationDirection = new Subject<BasePageAnimationDirection>();

  // defaults to Fade Animation
  private _animationDirection = BasePageAnimationDirection.FADE;


  constructor(private _router: Router) {}

  public setBasePageAnimationDirection(direction: BasePageAnimationDirection) {
    this._animationDirection = direction;
  }

  public getBasePageAnimationDirection():BasePageAnimationDirection {
    return this._animationDirection;
  }


  public navigateByUrl(
    url:string,
    animationDirection?:BasePageAnimationDirection
  ) {

    let direction = animationDirection? animationDirection : this._animationDirection;

    this.setBasePageAnimationDirection(direction);

    // emit current animation data
    this.animationDirection.next(direction);

    timer(1).subscribe((i) => {
      this._router.navigate([url]);
    });
  }

}
