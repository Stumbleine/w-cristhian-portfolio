import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    SvgIcon,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import IconsBar from "../components/IconsBar";
  import { useSelector } from "react-redux";
  import { ReactComponent as Gitlab } from "../icons/gitlab-brands.svg";
  import { GitHub, OpenInNew } from "@mui/icons-material";
  export default function Portfolio() {
    const portfolio = useSelector((state) => state.setting.data.portfolio);
    const projects = portfolio.projects;
    return (
      <Box component="main">
        <Container maxWidth="xl" sx={{ height: "92vh", display: "flex" }}>
          <IconsBar></IconsBar>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                mt: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {portfolio.subtitle}
              </Typography>
  
              <Box
                sx={{
                  bgcolor: "divider",
                  width: { lg: 500, md: 400, sm: 300, xs: 250, xl: 600 },
                  height: "0.5px",
                  ml: 2,
                }}
              ></Box>
            </Box>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              {portfolio.text}
            </Typography>
            <Grid
              container
              sx={{
                p: { xs: 0, sm: 1, md: 2 },
              }}
            >
              <Grid container spacing={2}>
                {projects.map((project) => (
                  <Grid item key={project.id}>
                    <Card
                      sx={{
                        width: 300,
                        height: 340,
                        bgcolor: "background.paper",
                      }}
                    >
                      {" "}
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.img}
                        alt="img"
                      />
                      <CardContent sx={{ p: 1 }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {project.title}
                        </Typography>
                        <Box sx={{ mb: 1, height: 70 }}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            component="div"
                          >
                            {project.description}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          {project.technologies.map((name, index) => (
                            <Typography
                              key={index}
                              variant="body1"
                              sx={{ color: "primary.main", mr: 1 }}
                            >
                              {name}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 0, justifyContent: "end" }}>
                        {project.github === null ? (
                          ""
                        ) : (
                          <IconButton onClick={() => window.open(project.github)}>
                            <GitHub
                              sx={{
                                color: "text.icon",
                                "&:hover": {
                                  color: "primary.main",
                                },
                              }}
                            ></GitHub>
                          </IconButton>
                        )}
                        {project.gitlab === null ? (
                          ""
                        ) : (
                          <IconButton>
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
                        )}
                        {project.url === null ? (
                          ""
                        ) : (
                          <IconButton>
                            <OpenInNew
                              sx={{
                                color: "text.icon",
                                "&:hover": {
                                  color: "primary.main",
                                },
                              }}
                            ></OpenInNew>
                          </IconButton>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
  