import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasePageAnimationDirection} from "../animation-base/animationTypes";

enum ButtonPositions {
  TOP,
  LEFT,
  LEFT_2,
  RIGHT,
    RIGHT_2,
BOTTOM,
    CENTER,
  CENTER_2
}

@Component({
  selector: 'app-link-container',
  templateUrl: './link-container.component.html',
  styleUrls: ['./link-container.component.scss']
})
export class LinkContainerComponent  {
  @Input() public targetName: any;
  @Input() public targetUrl: any;

  @Output() linkClicked = new EventEmitter<{ url: string, direction: BasePageAnimationDirection }>;

  public handleLinkClick(url: string, position: ButtonPositions  ) {
    let direction;
    switch (position) {
      case ButtonPositions.TOP:
        direction = BasePageAnimationDirection.DOWN;
        break;
      case ButtonPositions.LEFT:
        direction = BasePageAnimationDirection.RIGHT;
        break;
      case ButtonPositions.RIGHT:
        direction = BasePageAnimationDirection.LEFT;
        break;
      case ButtonPositions.BOTTOM:
        direction = BasePageAnimationDirection.UP;
        break;
      case ButtonPositions.CENTER:
        direction = BasePageAnimationDirection.ZOOM_OUT;
        break;
      case ButtonPositions.CENTER_2:
        direction = BasePageAnimationDirection.ZOOM_IN;
        break;
      case ButtonPositions.LEFT_2:
        direction = BasePageAnimationDirection.RIGHT_SPECIAL;
        break;
      case ButtonPositions.RIGHT_2:
        direction = BasePageAnimationDirection.LEFT_SPECIAL;
        break;
    }

    this.linkClicked.emit({
      url,
      direction,
    })
  }

  public get ButtonPositions() {
    return ButtonPositions;
  }

}


