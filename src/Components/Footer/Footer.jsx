import React from 'react';
import {
  MDBFooter, MDBContainer, MDBRow, MDBCol,
} from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import logo from '../Images/DSC Logo transperant.png';

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: '#161b22' }}
      className="text-white text-center text-lg-left"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4 mb-md-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai/"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={logo} alt="logo" style={{ maxWidth: '80%' }} />
              </motion.div>
            </a>
          </MDBCol>

          <MDBCol lg="5" md="6" className="mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <br />
              <li>
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:dsc.tcet@gmail.com"
                    className="text-white"
                  >
                    <i className="fas fa-envelope" />
                    <span style={{ marginLeft: '5px' }}>
                      dsc.tcet@gmail.com
                    </span>
                  </a>
                </h4>
              </li>

              <br />
              <li>
                <h4>
                  <address>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://goo.gl/maps/JGowWUcB87fhAHnL6"
                      className="text-white"
                    >
                      <i className="fas fa-map-marker-alt" />
                      <span style={{ marginLeft: '5px' }}>
                        Thakur Village, Kandivali. Mumbai, India.
                      </span>
                    </a>
                  </address>
                </h4>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="container p-4 pb-0">
            <h5 className="text-uppercase">Join Us !</h5>
            <section className="mb-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/dsc.tcet"
                className="btn btn-outline-light btn-floating m-1"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-instagram fa-lg" />
                </motion.div>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCKnHzPvjLadS_rAnwUxo8Bg"
                className="btn btn-outline-light btn-floating m-1"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-youtube fa-lg" />
                </motion.div>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/DSC-TCET"
                className="btn btn-outline-light btn-floating m-1"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-github fa-lg" />
                </motion.div>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/dsc-tcet"
                className="btn btn-outline-light btn-floating m-1"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-linkedin fa-lg" />
                </motion.div>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/invite/5w7AAXEy?utm_source=Discord%20Widget&utm_medium=Connect"
                className="btn btn-outline-light btn-floating m-1"
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >

                  <i className="fab fa-discord fa-lg" />
                </motion.div>
              </a>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-white"
          href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai/"
        >
          DSC TCET
        </a>
      </div>
    </MDBFooter>
  );
}
