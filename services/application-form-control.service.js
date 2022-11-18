// import { Injectable }   from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { ApplicationFormBase } from './application-form.base';

// @Injectable()
// export class ApplicationFormControlService {
//   constructor() { }

//   toFormGroup(formControls: ApplicationFormBase<any>[] ) {
//     let group: any = {};
//     let validators = [];
//     formControls.forEach(control => {
//       group[control.key] = control.required ? new FormControl(control.value || '', [Validators.required, Validators.pattern(control.validationExp)])
//                                               : new FormControl(control.value || '',[Validators.pattern(control.validationExp)]);
//     });
//     return new FormGroup(group);
//   }
// }

function ApplicationFormControlService() {
    return(
   <div></div>
    ) 
  }
  
  export default ApplicationFormControlService;