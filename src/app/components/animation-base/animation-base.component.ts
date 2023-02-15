import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Subscription} from "rxjs";
import {BasePageAnimationDirection} from "./animationTypes";
import {basePageAnimations} from "./animations";

@Component({
  selector: 'app-animation-base',
  template: '',
  styleUrls: ['animation-base-page.scss'],
  animations: [basePageAnimations],

})
export class AnimationBaseComponent  implements OnDestroy {
  @HostBinding("@basePageAnimation") containerAnimation = "fade";

  private _navigationSubscription: Subscription;

  constructor(protected _navigationService: NavigationService) {
    this.containerAnimation =
      this._navigationService.getBasePageAnimationDirection();
    this._navigationSubscription =
      this._navigationService.animationDirection.subscribe((direction:BasePageAnimationDirection) =>
        this.setAnimationDirection(direction)
      );
  }

  ngOnDestroy() {
    if (this._navigationSubscription) {
      this._navigationSubscription.unsubscribe();
    }
  }

  public setAnimationDirection(direction:BasePageAnimationDirection) {
    if (direction) {
      this.containerAnimation = direction;
    }
  }
  public navigateByUrl(data:{url:string, direction?:BasePageAnimationDirection}){
    this._navigationService.navigateByUrl(data.url, data.direction);
  }
}
