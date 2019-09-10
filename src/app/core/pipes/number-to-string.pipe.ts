import { Pipe, PipeTransform } from '@angular/core';

import { memoize } from 'lodash-es';

import { SpanishNumberConverterService } from '../services/spanish-number-converter.service';

@Pipe({
  name: 'numberToString',
})
export class NumberToStringPipe implements PipeTransform {
  public constructor(
    private numberConverterService: SpanishNumberConverterService,
  ) {}

  transform = memoize((value: number): string => {
    console.log('transform pipe');
    return this.numberConverterService.toString(value);
  });
}
