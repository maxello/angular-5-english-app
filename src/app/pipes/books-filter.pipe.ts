import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'BooksFilterPipe',
})

export class BooksFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input && value) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.title.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}
