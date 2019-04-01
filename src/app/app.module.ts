import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppWiseComponent } from './app-wise/app-wise.component';
import { SidenavabrComponent } from './sidenavabr/sidenavabr.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ActivityFeedsComponent } from './activity-feeds/activity-feeds.component';
import { WorldMapComponent } from './world-map/world-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWiseComponent,
    SidenavabrComponent,
    HighlightsComponent,
    ActivityFeedsComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
