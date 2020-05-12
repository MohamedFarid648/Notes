import { FormControl } from '@angular/forms';

export class QuantityValidation {

    static isValid(control: FormControl): any {

        if(control.value % 1 !== 0 || isNaN(control.value) || control.value < 1){
            return {
                "not valid": true
            };
        }

        return null;
    }

    static isValid2(value:number): any {

        if(value % 1 !== 0 || isNaN(value) || value < 1){
            return false
        }

        return true;
    }

}