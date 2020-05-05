import { Directive, ViewContainerRef, Component, NgModule,
  AfterViewInit, NgModuleRef, Compiler, Injector, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Directive({
  selector: '[appInsertTemplate]'
})
export class InsertTemplateDirective implements AfterViewInit, OnDestroy {

  @Input()
  appInsertTemplate: string;
  cmpRef: any;

  constructor(private viewContainer: ViewContainerRef,
              private compiler: Compiler,
              private injector: Injector,
              private m: NgModuleRef<any>) { }

  ngAfterViewInit() {
    const tmpCmp = Component({ template: this.appInsertTemplate })(class {
      });
    const tmpModule  = NgModule({
      //imports: [CommonModule, IonicModule],
      imports: [CommonModule],
      declarations: [tmpCmp]
    })(class {
    });
    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories[0];
        this.cmpRef = this.viewContainer.createComponent(f, null, this.injector, null, null);
        this.cmpRef.instance.name = 'Me';
      });
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
