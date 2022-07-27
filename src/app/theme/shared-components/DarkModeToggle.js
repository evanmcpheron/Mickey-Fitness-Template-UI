import { memo } from 'react';
import FuseThemeSchemes from '@fuse/core/FuseThemeSchemes';
import themesConfig from 'app/configs/themesConfig';
import { changeFuseTheme } from 'app/store/fuse/settingsSlice';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/styles';

function DarkModeToggle() {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <>
      <FuseThemeSchemes
        themes={themesConfig}
        mode={theme.palette.mode}
        onSelect={(_theme) => {
          dispatch(changeFuseTheme(_theme));
        }}
      />
    </>
  );
}

export default memo(DarkModeToggle);
