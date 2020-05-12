import { FormControl } from '@angular/forms';

export class MyValidator {

    static mailFormat(control: FormControl): ValidationResult {

        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;


        if (control.value == "" || EMAIL_REGEXP.test(control.value)
        ) {
            return null;
        } else {
            return { "mailPattern": true };
        }
    }

    static checkEmail(email: string): boolean {

        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (EMAIL_REGEXP.test(email)) {
            return true;
        } else {
            return false;
        }
    }


    //https://regexr.com/3c53v
    static phoneFormat(control: FormControl): ValidationResult {

        // let PHONE_REGEX = /^((\\+91-?)|0)?[0-9]{20}$/;
        //let PHONE_REGEX =  /^((\\+91-?)|0)?[0-9]*$/;
        
        let PHONE_REGEX =/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6,16}$/;
        ///^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

        if (control.value == "" || PHONE_REGEX.test(control.value)
        ) {
            return null;
        } else {
            return { "phonePattern": true };
        }
    }

    static passwordFormat(control: FormControl): ValidationResult {
        return { "passwordPattern": true };

        /* let PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}^/;
 
 
         if (control.value == "" )//|| PASSWORD_REGEX.test(control.value)
          {
             return null;
         } else {
             return { "passwordPattern": true };
         }*/
    }


    static textFormat(control: FormControl): ValidationResult {

        let Text_REGEX =  /^[أ-ى a-zA-Z ]{3,32}$/;//^[أ-ى A-Za-z_ ]{3,32}/;


        if (control.value == "" || Text_REGEX.test(control.value)
        ) {
            return null;
        } else {
            return { "textPattern": true };
        }
    }


}

interface ValidationResult {
    [key: string]: boolean;
}