import { ModalUnstyled, ModalUnstyledProps } from '@mui/base';
import Backdrop from './Backdrop';
import IcClose from './image/ic-close.svg';

type Props = ModalUnstyledProps & {
  handleClose: () => void;
};

const Modal = ({ children, handleClose, ...props }: Props) => (
  <ModalUnstyled
    className="z-10 fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center"
    slots={{ backdrop: Backdrop }}
    onClose={() => handleClose()}
    {...props}
  >
    <div className="w-full mx-[15px] sm:w-[610px] sm:mx-auto bg-white rounded-[20px] outline-none">
      <div className="relative h-[34px]">
        <img
          className="absolute right-[10px] bottom-0 cursor-pointer"
          src={IcClose}
          onClick={handleClose}
        />
      </div>
      <div className="px-5 pb-[20px]">{children}</div>
    </div>
  </ModalUnstyled>
);

export default Modal;
