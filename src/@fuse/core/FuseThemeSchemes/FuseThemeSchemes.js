import { memo, useState } from "react";
import { IconButton } from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

const SchemePreview = ({ theme, onSelect }) => {
  return (
    <IconButton onClick={() => onSelect(theme)} type="button">
      {theme.palette.mode === "light" ? (
        <FuseSvgIcon icon="sun" />
      ) : (
        <FuseSvgIcon icon="moon" />
      )}
    </IconButton>
  );
};

const FuseThemeSchemes = (props) => {
  const [mode, setMode] = useState(localStorage.getItem("mode"));

  const { themes } = props;

  const modeChange = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
      return themes.dark;
    }
    setMode("light");
    localStorage.setItem("mode", "light");
    return themes.light;
  };

  return (
    <SchemePreview
      theme={themes[mode]}
      onSelect={() => props?.onSelect(modeChange())}
    />
  );
};

export default memo(FuseThemeSchemes);
