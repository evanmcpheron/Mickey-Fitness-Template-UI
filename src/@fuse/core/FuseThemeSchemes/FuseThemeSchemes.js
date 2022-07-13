import { memo, useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";

function SchemePreview({ theme, onSelect }) {
  console.log(
    "🚀 ~ file: FuseThemeSchemes.js ~ line 7 ~ SchemePreview ~ onSelect",
    theme
  );
  return (
    <IconButton onClick={() => onSelect(theme)} type="button">
      {theme.palette.mode === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}

function FuseThemeSchemes(props) {
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  console.log(
    "🚀 ~ file: FuseThemeSchemes.js ~ line 18 ~ FuseThemeSchemes ~ mode",
    mode
  );

  const { themes } = props;

  const modeChange = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
      return themes["dark"];
    }
    setMode("light");
    localStorage.setItem("mode", "light");
    return themes["light"];
  };

  return (
    <SchemePreview
      theme={themes[mode]}
      onSelect={() => props?.onSelect(modeChange())}
    />
  );
}

export default memo(FuseThemeSchemes);
