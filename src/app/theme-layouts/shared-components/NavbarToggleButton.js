import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFuseCurrentSettings,
  setDefaultSettings,
} from "app/store/fuse/settingsSlice";
import _ from "@lodash";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import { navbarToggle, navbarToggleMobile } from "app/store/fuse/navbarSlice";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

function NavbarToggleButton(props) {
  const dispatch = useDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const settings = useSelector(selectFuseCurrentSettings);
  console.log(
    "🚀 ~ file: NavbarToggleButton.js ~ line 16 ~ NavbarToggleButton ~ settings",
    settings
  );

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
  children: (
    <FuseSvgIcon size={20} color="action">
      heroicons-outline:view-list
    </FuseSvgIcon>
  ),
};

export default NavbarToggleButton;
