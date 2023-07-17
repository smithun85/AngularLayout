import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent {
  form : FormGroup;
  cities = ["Mohali", "Chandigarh", "Ludhiana", "Amritsar"];
  zip_codes = ["282001", "456123", "123456", "140412"];
  
  constructor(private formBuilder : FormBuilder){
    // Setup FormArray fields with false default values
    this.form = this.formBuilder.group({
      cities   : this.formBuilder.array(this.cities.map(x => !1)),
      zip_codes : this.formBuilder.array(this.zip_codes.map(x => !1))
    });
  }

  // Submit form

convertToValue(key: string) {
  // return this.form.value[key].map((x:string, i:number) => x && this[key][i]).filter((x:any) => !!x);
}

onSubmit() {
  const valueToStore = Object.assign({}, this.form.value, {
    cities: this.convertToValue('cities'),
    zip_codes: this.convertToValue('zip_codes')
  });
  console.log(valueToStore);

  // Default values

const defaultCities = ["Mohali", "Amritsar"];
const defaultZipCodes = ["456123"];
 this.form = this.formBuilder.group({
  cities: this.formBuilder.array(this.cities.map(x => defaultCities.indexOf(x) > -1)),
  zip_codes: this.formBuilder.array(this.zip_codes.map(x => defaultZipCodes.indexOf(x) > -1))
});
}



}
