import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectFuseCurrentSettings } from 'app/store/fuse/settingsSlice';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Icons from '../../../@helper/Icons';

function NavbarToggleButton(props) {
  const dispatch = useDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const settings = useSelector(selectFuseCurrentSettings);

  return (
    <IconButton
      className={props.className}
      color="inherit"
      size="large"
      onClick={(ev) => {
        if (isMobile) {
          dispatch(navbarToggleMobile());
        } else {
          dispatch(navbarToggle());
        }
      }}
    >
      {props.children}
    </IconButton>
  );
}

NavbarToggleButton.defaultProps = {
  children: <FuseSvgIcon size={20} color="action" icon={Icons.faBars} />,
};

export default NavbarToggleButton;
