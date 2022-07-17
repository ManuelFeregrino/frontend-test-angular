import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataObsService } from './services/data-obs.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DataObsService
  ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
          throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
  
    static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: CoreModule
        };
    }
}


