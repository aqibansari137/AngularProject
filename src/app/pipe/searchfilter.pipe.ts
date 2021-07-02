import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(courses:any,searchText:string): any {
    return courses.filter((search:any)=>{
      return search.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1
    })
  }

}
