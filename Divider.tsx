import classNames from 'classnames';

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => (
  <div className={classNames('h-[1px] bg-grey-500 my-5', className)} />
);

export default Divider;
