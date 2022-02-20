import { Container, Typography, Grid, Button, Link } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import IconsBar from "../components/IconsBar";
import { Mail } from "@mui/icons-material";
export default function Contact() {
  const data = useSelector((state) => state.setting.data.contact);
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "92vh", display: "flex" }}>
        <IconsBar></IconsBar>
        <Grid
          container
          sx={{
            p: { xs: 0, sm: 1, md: 2 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: 400 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", width: "30%" }}
              >
                {data.subtitle}
              </Typography>

              <Box
                sx={{
                  bgcolor: "divider",
                  width: "70%",
                  height: "0.5px",
                  ml: 2,
                }}
              ></Box>
            </Box>
            <Box sx={{ maxWidth: 1, textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                  mt: 1,
                  color: "text.secondary",
                }}
              >
                {data.p}
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  width: 1,
                  textAlign: "center",
                }}
              >
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location = "mailto:w.cosmoswaves@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <Button variant="contained" startIcon={<Mail />}>
                    {data.btnHello}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
