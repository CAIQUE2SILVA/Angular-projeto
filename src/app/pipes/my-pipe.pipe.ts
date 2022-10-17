import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let newValue = value

    if(typeof value === 'string'){
      newValue = value.replace(/[aeiou]/gi, '')

      let prefix =''

      args.forEach(args => {
        prefix = `${args} ${prefix}`

      })
      newValue = ` ${prefix} ${newValue} `
    }


    return newValue;
  }

}
