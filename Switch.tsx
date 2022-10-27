import { useSwitch, UseSwitchParameters } from '@mui/base';
import classNames from 'classnames';

const Switch = (props: UseSwitchParameters) => {
  const { getInputProps, checked, disabled } = useSwitch(props);

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
        className="absolute w-full h-full top-0 left-0 opacity-0 z-0 m-0 cursor-[inherit]"
        {...getInputProps()}
      />
    </span>
  );
};

export default Switch;
