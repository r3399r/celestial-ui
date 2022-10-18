import { ModalUnstyled } from '@mui/base';
import Backdrop from './Backdrop';
import IcLoader from './image/ic-loader.svg';

type Props = {
  open: boolean;
};

const Loader = ({ open }: Props) => (
  <ModalUnstyled
    open={open}
    className="fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center"
    components={{ Backdrop }}
  >
    <div className="w-20 outline-none">
      <img src={IcLoader} />
    </div>
  </ModalUnstyled>
);

export default Loader;
