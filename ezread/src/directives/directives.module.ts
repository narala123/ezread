import { NgModule } from '@angular/core';
import { CustomDirective } from './custom/custom';
@NgModule({
	declarations: [CustomDirective],
	imports: [],
	exports: [CustomDirective]
})
export class DirectivesModule {}
