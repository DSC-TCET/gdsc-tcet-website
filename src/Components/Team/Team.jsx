/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import CloudIcon from "@mui/icons-material/Cloud";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";
import PaletteIcon from "@mui/icons-material/Palette";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CodeIcon from "@mui/icons-material/Code";
import {
  Lead,
  marketing,
  secretariat,
  technical,
  outreach,
  logistics,
  press,
  eventsCoordinator,
} from "./data";
import classes from "./team.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TeamCard from "./TeamCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Team() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ background: "#fafafa" }}>
      <Container style={{ paddingTop: "3vh" }}>
        <Row style={{ paddingBottom: "5vh" }}>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <h1 className={classes.teamtitle}>Meet the Team</h1>
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                style={{ textAlign: "center" }}
                sx={{ borderBottom: 1, borderColor: "divider" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant='scrollable'
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <Tab
                    icon={<PersonIcon />}
                    label='Lead'
                    {...a11yProps(0)}
                    className={classes.tab}
                  />

                  <Tab
                    icon={<CodeIcon />}
                    label='Technical'
                    {...a11yProps(1)}
                    className={classes.tab}
                  />

                  <Tab
                    icon={<CloudIcon />}
                    label='Secretariat'
                    {...a11yProps(2)}
                    className={classes.tab}
                  />

                  <Tab
                    icon={<PlaceIcon />}
                    label='Logistics'
                    className={classes.tab}
                    {...a11yProps(3)}
                  />

                  <Tab
                    icon={<EventIcon />}
                    label='Event'
                    {...a11yProps(4)}
                    className={classes.tab}
                  />

                  <Tab
                    icon={<AssignmentIcon />}
                    label='Marketing'
                    {...a11yProps(5)}
                    className={classes.tab}
                  />

                  <Tab
                    icon={<PaletteIcon />}
                    label='Press'
                    {...a11yProps(6)}
                    className={classes.tab}
                  />

                  <Tab
                    icon={<LanguageIcon />}
                    label='Outreach'
                    {...a11yProps(7)}
                    className={classes.tab}
                  />
                </Tabs>
              </Box>

              {/* Lead Start */}
              <TabPanel value={value} index={0}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {Lead.map((item, i) => {
                    let color = "#E84435";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Lead End */}

              {/* Technical Start */}

              <TabPanel value={value} index={1}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {technical.map((item, i) => {
                    let color = "#089D57";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Technical End */}

              {/* Secretariat Start */}

              <TabPanel value={value} index={2}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {secretariat.map((item, i) => {
                    let color = "#2376E5";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Secretariat End */}

              {/* Logistics Start */}

              <TabPanel value={value} index={3}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {logistics.map((item, i) => {
                    let color = "#F6BA17";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Logistics End */}

              {/* Event Start */}

              <TabPanel value={value} index={4}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {eventsCoordinator.map((item, i) => {
                    let color = "#E84435";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Event End */}

              {/* Marketing Start */}

              <TabPanel value={value} index={5}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {marketing.map((item, i) => {
                    let color = "#089D57";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Marketing End */}

              {/* Press Start */}

              <TabPanel value={value} index={6}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {press.map((item, i) => {
                    let color = "#2376E5";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Press End */}

              {/* Outreach Start */}

              <TabPanel value={value} index={7}>
                <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                  {outreach.map((item, i) => {
                    let color = "#F6BA17";
                    const {
                      name,
                      post: position,
                      imageurl: profile,
                      githuburl,
                      linkedinurl,
                      twitterUrl,
                      quote,
                    } = item;
                    let socials = [
                      {
                        link: githuburl,
                        icon: (
                          <GitHubIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: linkedinurl,
                        icon: (
                          <LinkedInIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                      {
                        link: twitterUrl,
                        icon: (
                          <TwitterIcon sx={{ fontSize: 35, color: color }} />
                        ),
                      },
                    ];
                    return (
                      <TeamCard
                        profile={profile}
                        name={name}
                        position={position}
                        quote={quote}
                        socials={socials}
                        color={color}
                      />
                    );
                  })}
                </div>
              </TabPanel>

              {/* Outreach End */}
            </Box>
          </motion.div>
        </Row>
        <br />

        <br />
      </Container>
    </div>
  );
}

export default Team;
