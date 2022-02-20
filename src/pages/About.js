import {
    Container,
    Typography,
    Grid,
    Paper,
    SvgIcon,
    Tooltip,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import IconsBar from "../components/IconsBar";
  import { ArrowRight } from "@mui/icons-material";
  import { useSelector } from "react-redux";
  import { iconsList, iconsComponents } from "../features/icons";
  export default function About() {
    const data = useSelector((state) => state.setting.data.info.cv);
    const about = useSelector((state) => state.setting.data.about);
    const language = useSelector((state) => state.setting.language);
  
    const RowIcons = () => {
      return (
        <>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 0.5,
            }}
          >
            {iconsComponents.rowTech1.map((tech, index) => (
              <Grid item key={index}>
                <Paper
                  sx={{
                    height: 80,
                    width: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Tooltip title={tech.name}>
                    <SvgIcon
                      sx={{
                        fontSize: 40,
                        color: "text.icon",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {tech.icon}
                    </SvgIcon>
                  </Tooltip>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      );
    };
  
    const RowIcons2 = () => {
      return (
        <>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 0.5,
            }}
          >
            {iconsComponents.rowTech2.map((tech, index) => (
              <Grid item key={index}>
                <Paper
                  sx={{
                    height: 80,
                    width: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Tooltip title={tech.name}>
                    <SvgIcon
                      sx={{
                        fontSize: 40,
                        color: "text.icon",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {tech.icon}
                    </SvgIcon>
                  </Tooltip>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      );
    };
    const RowToolIcons = () => {
      return (
        <>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 0.5,
            }}
          >
            {iconsComponents.rowTools.map((tool, index) => (
              <Grid item key={index}>
                <Paper
                  sx={{
                    height: 80,
                    width: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Tooltip title={tool.name}>
                    <SvgIcon
                      sx={{
                        fontSize: 40,
                        color: "text.icon",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {tool.icon}
                    </SvgIcon>
                  </Tooltip>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      );
    };
  
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
          <Grid container>
            <Grid
              item
              md={8}
              lg={7}
              sx={{
                display: "flex",
                alignItems: "center",
                p: { xs: 0, sm: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  maxWidth: { lg: 900, md: 600, sm: 700, xs: 550 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", width: "25%" }}
                  >
                    {about.subtitle}
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
                <Box
                  sx={{
                    width: "100%",
                    display: { xs: "flex", sm: "flex", md: "none" },
                    justifyContent: "start",
                    mt: 2,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 160, sm: 200, md: 270, lg: 300 },
                      width: { xs: 160, sm: 200, md: 270, lg: 300 },
                    }}
                  >
                    <img
                      src="./imgs/waves.jpg"
                      alt="perfil"
                      loading="lazy"
                      style={{
                        height: "auto",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() =>
                      window.open(
                        language.english ? data.cvEnglish : data.cvSpanish
                      )
                    }
                    sx={{ ml: 3 }}
                  >
                    {about.btnDownload}
                  </Button>
                </Box>
                <Typography
                  sx={{
                    fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                    color: "text.secondary",
                    mt: 1,
                  }}
                >
                  {about.p1}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {about.p2}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {about.p3}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 20, md: 18, sm: 17, xs: 15 },
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {about.p4}
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <RowIcons></RowIcons>
                  <RowIcons2></RowIcons2>
                </Box>
                {/* <Typography sx={{ fontSize: 20, color: "text.secondary", mt: 1 }}>
                  Aqui las tecnologias que utilizo actualmente:
                </Typography> */}
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <RowToolIcons></RowToolIcons>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "none",
                    },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <List dense>
                    {iconsList.line1.map((el, index) => (
                      <ListItem key={index}>
                        <ListItemIcon sx={{ color: "primary.main" }}>
                          <ArrowRight></ArrowRight>
                        </ListItemIcon>
                        <ListItemText primary={el} />
                      </ListItem>
                    ))}
                  </List>
                  <List dense>
                    {iconsList.line2.map((el, index) => (
                      <ListItem key={index}>
                        <ListItemIcon sx={{ color: "primary.main" }}>
                          <ArrowRight></ArrowRight>
                        </ListItemIcon>
                        <ListItemText primary={el} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Grid>
            {/* image grid */}
            <Grid
              item
              md={4}
              lg={5}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: { md: 270, lg: 300 },
                    width: { md: 270, lg: 300 },
                  }}
                >
                  <img
                    src={"./imgs/waves.jpg"}
                    alt="perfil"
                    loading="lazy"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      language.english ? data.cvEnglish : data.cvSpanish
                    )
                  }
                  sx={{ mt: 5 }}
                >
                  {about.btnDownload}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
  