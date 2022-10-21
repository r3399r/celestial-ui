import { ReactElement } from 'react';
import Button from './Button';
import Modal from './Modal';
import H2 from './typography/H2';

type Props = {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children: ReactElement;
  cancelBtn?: string;
  confirmBtn?: string;
  onConfirm?: () => void;
};

const ModalForm = ({
  title,
  children,
  cancelBtn,
  confirmBtn,
  handleClose,
  onConfirm,
  ...props
}: Props) => (
  <Modal handleClose={handleClose} {...props}>
    <>
      {title && <H2 className="mb-[15px]">{title}</H2>}
      <div className="pb-[20px]">{children}</div>
      {(cancelBtn || confirmBtn) && (
        <div className="flex justify-end pt-[10px] gap-[15px] pb-[30px] flex-wrap">
          {cancelBtn && (
            <Button appearance="secondary" onClick={handleClose} type="button">
              {cancelBtn}
            </Button>
          )}
          {confirmBtn && (
            <Button appearance="default" onClick={onConfirm} type="button">
              {confirmBtn}
            </Button>
          )}
        </div>
      )}
    </>
  </Modal>
);

export default ModalForm;
