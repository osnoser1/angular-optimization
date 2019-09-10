import { Pipe, PipeTransform } from '@angular/core';
import { SpanishNumberConverterService } from '../services/spanish-number-converter.service';

@Pipe({
  name: 'numberToString',
  pure: false,
})
export class NumberToStringPipe implements PipeTransform {
  public constructor(
    private numberConverterService: SpanishNumberConverterService,
  ) {}

  transform(value: number): string {
    console.log('transform pipe');
    return this.numberConverterService.toString(value);
  }
}
