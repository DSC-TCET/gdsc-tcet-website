/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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

const data = [
  {
    data: Lead,
    color: "#E84435",
  },
  {
    data: technical,
    color: "#089D57",
  },
  {
    data: secretariat,
    color: "#2376E5",
  },
  {
    data: logistics,
    color: "#F6BA17",
  },
  {
    data: eventsCoordinator,
    color: "#E84435",
  },
  {
    data: marketing,
    color: "#089D57",
  },
  {
    data: press,
    color: "#2376E5",
  },
  {
    data: outreach,
    color: "#F6BA17",
  },
];

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
        <div
          style={{ paddingBottom: "5vh" }}
          className='flex flex-col gap-5 pt-5'
        >
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              delay: 0.1,
              duration: 0.5,
            }}
          >
            <h1 className='text-center text-5xl font-bold text-black'>
              Meet The Team
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
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

              {data.map((item, i) => {
                const { data, color } = item;
                return (
                  <TabPanel key={i} value={value} index={i}>
                    <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 justify-center'>
                      {data.map((item, i) => {
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
                              <LinkedInIcon
                                sx={{ fontSize: 35, color: color }}
                              />
                            ),
                          },
                          {
                            link: twitterUrl,
                            icon: (
                              <TwitterIcon
                                sx={{ fontSize: 35, color: color }}
                              />
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
                );
              })}
            </Box>
          </motion.div>
        </div>
        <br />

        <br />
      </Container>
    </div>
  );
}

export default Team;
