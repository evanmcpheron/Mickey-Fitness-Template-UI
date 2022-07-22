import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFuseCurrentLayoutConfig, selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import { selectFuseNavbar } from 'app/store/fuse/navbarSlice';
import DarkModeToggle from '../../shared-components/DarkModeToggle';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import NavbarToggleButton from '../../shared-components/NavbarToggleButton';
import UserMenu from '../../shared-components/UserMenu';

function ToolbarMenu(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const navbar = useSelector(selectFuseNavbar);
  const toolbarTheme = useSelector(selectToolbarTheme);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('flex relative z-20 shadow-md', props.className)}
        color="default"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? toolbarTheme.palette.background.paper
              : toolbarTheme.palette.background.default,
        }}
        position="static"
      >
        <Toolbar className="p-0 min-h-48 md:min-h-64">
          <div className="flex flex-1 px-16">
            <Hidden lgDown>
              {config.navbar.style === 'style' && !navbar.open && (
                <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
              )}
            </Hidden>{' '}
            <Hidden lgUp>
              <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
            </Hidden>
          </div>

          <div className="flex items-center px-8 h-full overflow-x-auto">
            {/* <Hidden lgUp>
              <LanguageSwitcher />
            </Hidden> */}

            <DarkModeToggle />

            <Hidden lgDown>
              <FullScreenToggle />
            </Hidden>

            {/* <Hidden lgUp>
              <NavigationSearch />
            </Hidden> */}

            {/* <Hidden lgUp>
              <AdjustFontSize />
            </Hidden> */}

            {/* <Hidden lgUp>
              <ChatPanelToggleButton />
            </Hidden> */}

            {/* <Hidden lgUp>
              <QuickPanelToggleButton />
            </Hidden> */}

            {/* <Hidden lgUp>
              <NotificationPanelToggleButton />
            </Hidden> */}

            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarMenu);
