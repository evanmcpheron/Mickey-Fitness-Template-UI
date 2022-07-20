import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FusePageSimple from "@fuse/core/FusePageSimple";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.default,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));

const HomePage = (props) => {
  const { t } = useTranslation("examplePage");

  return (
    <Root
      header={
        <div className="p-24">
          <h4>{t("TITLE")}</h4>
        </div>
      }
      content={<div className="p-24">HOME</div>}
      scroll="content"
    />
  );
};

export default HomePage;
