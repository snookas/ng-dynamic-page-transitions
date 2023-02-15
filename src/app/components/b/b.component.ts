import { Component } from '@angular/core';
import {AnimationBaseComponent} from "../animation-base/animation-base.component";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['../animation-base/animation-base-page.scss','./b.component.scss', '../sharedStyles/componentStyling.scss']
})
export class BComponent  extends AnimationBaseComponent {

}
