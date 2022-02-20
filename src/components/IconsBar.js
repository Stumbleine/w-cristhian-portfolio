import { IconButton, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Discord } from "../icons/discord-brands.svg";
import { ReactComponent as Linkedin } from "../icons/linkedin-in-brands.svg";
import { ReactComponent as Gitlab } from "../icons/gitlab-brands.svg";
import { GitHub, MailOutline } from "@mui/icons-material";
import { useSelector } from "react-redux";
export default function IconsBar() {
  const data = useSelector((state) => state.setting.data.info.social);
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },

        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mr: "2%",
      }}
    >
      {/* SOCIAL ICONS */}
      <Box
        sx={{
          bgcolor: "divider",
          width: "0.5px",
          height: 200,
          mb: 1,
        }}
      ></Box>

      <IconButton
        onClick={(e) => {
          window.location = "mailto:" + data.email;
          e.preventDefault();
        }}
      >
        <MailOutline
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        ></MailOutline>
      </IconButton>
      <IconButton onClick={() => window.open(data.discord)}>
        <SvgIcon
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Discord></Discord>
        </SvgIcon>
      </IconButton>
      <IconButton onClick={() => window.open(data.linkedin, "_blank")}>
        <SvgIcon
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Linkedin></Linkedin>
        </SvgIcon>
      </IconButton>
      <IconButton onClick={() => window.open(data.github)}>
        <GitHub
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        ></GitHub>
      </IconButton>
      <IconButton onClick={() => window.open(data.gitlab)}>
        <SvgIcon
          sx={{
            color: "text.icon",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Gitlab></Gitlab>
        </SvgIcon>
      </IconButton>
      <Box
        sx={{
          bgcolor: "divider",
          width: "0.5px",
          height: 200,
          mt: 2,
        }}
      ></Box>
    </Box>
  );
}
