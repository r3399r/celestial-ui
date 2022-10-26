import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Switch = ({ defaultChecked = false, onChange, disabled, ...props }: Props) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange && onChange(event);
  };

  return (
    <span
      className={classNames('w-10 h-6 relative inline-block', {
        'opacity-40 cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      })}
    >
      <span
        className={classNames('rounded-2xl h-full block w-full absolute', {
          'bg-navy-700': checked,
          'bg-navy-100': !checked,
        })}
      />
      <span
        className={classNames(
          'block w-4 h-4 top-1 left-1 rounded-2xl bg-white relative transition-all',
          {
            'left-5': checked,
          },
        )}
      />
      <input
        type="checkbox"
        className="absolute w-full h-full top-0 left-0 opacity-0 z-0 m-0 cursor-[inherit]"
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
    </span>
  );
};

export default Switch;
