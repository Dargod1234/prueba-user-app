import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Aplica un color de fondo al elemento cuando el cursor pasa sobre él.
 * El color se define mediante el valor del atributo `appHighlight`.
 *
 * Uso:
 * ```html
 * <tr [appHighlight]="'#f0f0f0'">...</tr>
 * ```
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
