import { NgModule } from "@angular/core";
import { CounterComponent } from "./componets/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
