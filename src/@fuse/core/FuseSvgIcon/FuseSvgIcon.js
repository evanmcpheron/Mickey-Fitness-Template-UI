import clsx from 'clsx';
import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/pro-light-svg-icons';

const Root = styled(Box)(({ theme, ...props }) => ({
  width: props.size,
  height: props.size,
  minWidth: props.size,
  minHeight: props.size,
  fontSize: props.size,
  lineHeight: props.size,
  color: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    action: theme.palette.action.active,
    error: theme.palette.error.main,
    disabled: theme.palette.action.disabled,
    inherit: undefined,
  }[props.color],
}));

const FuseSvgIcon = forwardRef((props, ref) => {
  const [icon, setIcon] = useState(props.icon);

  useEffect(() => {
    setIcon(props.icon);
  }, [props.icon]);

  return (
    <Root
      {...props}
      component="svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx('shrink-0 fill-current ', props.className)}
      ref={ref}
      size={props.size}
      sx={props.sx}
      color={props.color}
    >
      <FontAwesomeIcon icon={icon || faSkullCrossbones} />
    </Root>
  );
});

FuseSvgIcon.propTypes = {
  icon: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
  color: PropTypes.oneOf([
    'inherit',
    'disabled',
    'primary',
    'secondary',
    'action',
    'error',
    'info',
    'success',
    'warning',
  ]),
};

FuseSvgIcon.defaultProps = {
  children: 'skull-crossbones',
  size: 24,
  sx: {},
  color: 'inherit',
};

export default FuseSvgIcon;
