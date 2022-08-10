import { useState } from 'react';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import FuseSvgIcon from '../../../../@fuse/core/FuseSvgIcon';
import Icons from '../../../../@helper/Icons';
import { useThemeMediaQuery } from '../../../../@fuse/hooks';
import PaymentInformation from './editTabs/PaymentInformation';
import FusePageSimple from '../../../../@fuse/core/FusePageSimple';
import EditTabSidebarContent from './editTabs/EditTabSidebarContent';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .container': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-sidebar': {},
  '& .FusePageSimple-leftSidebar': {},
}));

const EditTab = () => {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(!isMobile);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Root
        content={
          <Paper
            className="flex flex-col w-full items-center m-10"
            style={{ backgroundColor: 'red' }}
          >
            <Hidden lgUp>
              <IconButton
                onClick={() => setOpen(!open)}
                aria-label="open left sidebar"
                size="large"
                sx={{ position: 'absolute', left: 20, top: 10 }}
              >
                <FuseSvgIcon icon={Icons.faBars} />
              </IconButton>
            </Hidden>
            {selectedTab === 0 ? <PaymentInformation /> : 'testing'}
          </Paper>
        }
        leftSidebarOpen={open}
        leftSidebarOnClose={() => {
          setOpen(false);
        }}
        leftSidebarContent={
          <EditTabSidebarContent selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </>
  );
};

export default EditTab;
