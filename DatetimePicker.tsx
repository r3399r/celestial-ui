import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { useState } from 'react';
import Button from './Button';
import IcCalendar from './image/ic-calendar.svg';
import IcClock from './image/ic-clock.svg';
import IcSelect from './image/ic-select.svg';
import Input from './Input';
import Modal from './Modal';

type Props = {
  label?: string;
  initValue: Date;
  value: Date;
  setValue: (v: Date) => void;
  cancelTxt: string;
  confirmTxt: string;
};

const DatetimePicker = ({ label, initValue, value, setValue, cancelTxt, confirmTxt }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      {label && <div className="text-[14px] leading-normal text-navy-700 mb-[5px]">{label}</div>}
      <div
        className="rounded bg-grey-200 outline-none p-2 h-[40px] cursor-pointer flex justify-between"
        onClick={() => setOpen(true)}
      >
        <div>{format(value, 'yyyy/MM/dd HH:mm')}</div>
        <div>
          <img src={IcSelect} />
        </div>
      </div>
      <Modal open={open} handleClose={() => setOpen(false)} showClose={false} px={false}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateTimePicker
            value={value}
            onChange={(newValue) => {
              newValue && setValue(newValue);
            }}
            renderInput={({ inputProps }) => <Input {...inputProps} />}
            ampm={false}
            componentsProps={{
              actionBar: { actions: [] },
            }}
            dateRangeIcon={<img src={IcCalendar} />}
            timeIcon={<img src={IcClock} />}
            inputFormat="yyyy/MM/dd HH:mm"
          />
          <div className="flex gap-[15px] justify-end mr-3">
            <Button
              appearance="secondary"
              onClick={() => {
                setOpen(false);
                setValue(initValue);
              }}
            >
              {cancelTxt}
            </Button>
            <Button appearance="default" onClick={() => setOpen(false)}>
              {confirmTxt}
            </Button>
          </div>
        </LocalizationProvider>
      </Modal>
    </div>
  );
};

export default DatetimePicker;
