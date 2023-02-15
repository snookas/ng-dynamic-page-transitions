import { Component } from '@angular/core';
import {AnimationBaseComponent} from "../animation-base/animation-base.component";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['../animation-base/animation-base-page.scss','./a.component.scss', '../sharedStyles/componentStyling.scss']
})
export class AComponent extends AnimationBaseComponent{

}
