

function DynamicApplicationService() {
}


 const transformControls=(controls) =>{
   const form= ApplicationFormBase<any>[];

   for (let index = 0; index < controls.length; index++) {
     const control = controls[index];
     let tempControl = control.controlType+"Control"(control);
     form.push(tempControl)
     
   }
   return form.sort((a, b) => a.order - b.order);
 }
 const textboxControl=(data)=>{
     return new textboxControl(data);
   }

 const radioControl=(data)=>{
     alert(data)
   return new radioControl(data);
  
 }
 const checkboxControl=(data)=>{
   return new checkboxControl(data);
 }
 const textareaControl=(data)=>{
   return new textareaControl(data);
 }

  export {
    DynamicApplicationService,
    transformControls
  
  };
