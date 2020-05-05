import { NgModule, ViewEncapsulation, MissingTranslationStrategy, Compiler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createJitCompiler() {
  return new JitCompilerFactory().createCompiler([{
    useJit: true,
    defaultEncapsulation: ViewEncapsulation.Emulated,
    missingTranslation: MissingTranslationStrategy.Warning,
    preserveWhitespaces: false
  }]);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Compiler, useFactory: createJitCompiler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
