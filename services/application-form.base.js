// export class ApplicationFormBase<T> {
//   value: T;
//   key: string;
//   title: string;
//   required: boolean;
//   order: number;
//   controlType: string;
//   validationExp:string;
//   validationMessage:string;
//   options:any = [];
//   constructor(options: {
//       value?: T,
//       key?: string,
//       title?: string,
//       required?: boolean,
//       order?: number,
//       controlType?: string,
//       validationExp?:string,
//       validationMessage?:string
//       options?:any
//     } = {}) {
//     this.value = options.value;
//     this.key = options.key || '';
//     this.title = options.title || '';
//     this.required = !!options.required;
//     this.order = options.order === undefined ? 1 : options.order;
//     this.controlType = options.controlType || '';
//     this.validationExp = options.validationExp || '';
//     this.validationExp = options.validationExp || '';
//     this.validationMessage = options.validationMessage || '';
//     this.options = options.options || [];
//   }
// }

function ApplicationFormBase({ inputOptions }) {
  const [options, setoptions] = useState(undefined);
  useEffect(() => {
    setoptions(inputOptions);
  }, []);
  {
    value = options.value;
    key = options.key || "";
    title = options.title || "";
    required = !!options.required;
    order = options.order === undefined ? 1 : options.order;
    controlType = options.controlType || "";
    validationExp = options.validationExp || "";
    validationExp = options.validationExp || "";
    validationMessage = options.validationMessage || "";
    options = options.options || [];
  }

  return <div></div>;
}

export default ApplicationFormBase;
