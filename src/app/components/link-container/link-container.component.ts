import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasePageAnimationDirection} from "../animation-base/animationTypes";

@Component({
  selector: 'app-link-container',
  templateUrl: './link-container.component.html',
  styleUrls: ['./link-container.component.scss']
})
export class LinkContainerComponent  {
  @Input() public targetName: any;
  @Input() public targetUrl: any;

  @Output() linkClicked = new EventEmitter<{ url: string, direction: BasePageAnimationDirection }>;

  public handleLinkClick(url: string, position: "top" | "left" | "right" | "bottom" | "center-1" | "center-2") {
    let direction;
    switch (position) {
      case "top":
        direction = BasePageAnimationDirection.DOWN;
        break;
      case "left":
        direction = BasePageAnimationDirection.RIGHT;
        break;
      case "right":
        direction = BasePageAnimationDirection.LEFT;
        break;
      case "bottom":
        direction = BasePageAnimationDirection.UP;
        break;
      case "center-1":
        direction = BasePageAnimationDirection.ZOOM_OUT;
        break;
      case "center-2":
        direction = BasePageAnimationDirection.ZOOM_IN;
        break;
    }

    this.linkClicked.emit({
      url,
      direction,
    })
  }

}


