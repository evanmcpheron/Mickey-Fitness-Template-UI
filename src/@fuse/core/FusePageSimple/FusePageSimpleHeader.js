import clsx from 'clsx';

function FusePageSimpleHeader(props) {
  return (
    <div className={clsx('FusePageSimple-header', props.className)}>
      <div className="w-full">{props.header && props.header}</div>
    </div>
  );
}

export default FusePageSimpleHeader;
