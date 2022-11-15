import { forwardRef } from 'react';
import Input, { Props as InputProps } from './Input';

export type Props = InputProps & {
  decimal: number;
};

const NumberInput = forwardRef<HTMLInputElement, Props>(({ decimal, ...props }, ref) => (
  <Input
    regex={decimal > 0 ? new RegExp(`^[0-9]*\\.?[0-9]{0,${decimal}}$`) : new RegExp('^[0-9]*$')}
    ref={ref}
    {...props}
  />
));

NumberInput.displayName = 'NumberInput';

export default NumberInput;
