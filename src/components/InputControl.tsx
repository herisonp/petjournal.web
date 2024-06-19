import { InputMessage } from "./InputMessage"
import { Input } from "./Input"
import { Label } from "./Label"
import { cn } from "@/utils/twmerge";

interface InputControlProps {
   variant?: 'primary' | 'secondary';
   className?: string;
   label: string;
   htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
   type: React.InputHTMLAttributes<HTMLInputElement>['type'];
   placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
   message?: string;
   styleMessage?: 'error' | 'warning';
} 

const InputControl = ({variant = 'primary', className, label, htmlFor, type, placeholder, message, styleMessage}: InputControlProps) => {
  const labelClassName = variant === 'secondary' ? 'pl-2' : '';
  let inputControl;
  
  switch (styleMessage) {
    case 'error' : 
      inputControl = (
        <div className={cn(className)}>
          <Label variant={variant} htmlFor={htmlFor} className={labelClassName}>{label}</Label>
          <Input variant='error' type={type} placeholder={placeholder} />
          <InputMessage message={message} variant={styleMessage} />
        </div>
      );
    break;

    default: 
      inputControl = (
        <div className={cn(className)}>
          <Label variant={variant} htmlFor={htmlFor} className={labelClassName}>{label}</Label>
          <Input variant={variant} type={type} placeholder={placeholder} />
          <InputMessage message={message} variant={styleMessage} />
        </div>
      )
    break;
  }

  return inputControl;
}

export { InputControl }