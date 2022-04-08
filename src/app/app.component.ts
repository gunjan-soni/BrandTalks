import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brandtalks';
  public selected = false;
  public scroll: any; 
  public sections = 4;
  constructor(private renderer: Renderer2) {
  }
  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
       this.scroll = (window.scrollY / this.sections);
    })
  }

}
