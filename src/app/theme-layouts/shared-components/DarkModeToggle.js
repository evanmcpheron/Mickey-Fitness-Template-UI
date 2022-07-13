import { memo } from "react";
import FuseThemeSchemes from "@fuse/core/FuseThemeSchemes";
import themesConfig from "app/configs/themesConfig";
import { changeFuseTheme } from "app/store/fuse/settingsSlice";
import { useDispatch } from "react-redux";

function DarkModeToggle() {
  const dispatch = useDispatch();

  return (
    <>
      <FuseThemeSchemes
        themes={themesConfig}
        onSelect={(_theme) => {
          dispatch(changeFuseTheme(_theme));
        }}
      />
    </>
  );
}

export default memo(DarkModeToggle);
