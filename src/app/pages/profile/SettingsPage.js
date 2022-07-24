import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

const SettingsPage = (props) => {
  const { t } = useTranslation('examplePage');

  return (
    <Root
      header={
        <div className="p-24">
          <h4>HERO BAR GOES HERE (SLIDER THING)</h4>
        </div>
      }
      content={<div className="p-24">SETTINGS</div>}
      scroll="content"
    />
  );
};

export default SettingsPage;
