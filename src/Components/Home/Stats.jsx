import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DateTime } from 'luxon';
import CountUp from 'react-countup';

function Stats() {
  const launch = DateTime.local(2021, 9, 3, 0, 1);
  const dur = Math.trunc(DateTime.now().diff(launch, ['months']).months);

  return (
    <div style={{ background: '#f7f7f9' }}>
      <Container>
        <Row style={{ paddingBottom: '5vh' }}>
          <Col style={{ paddingBottom: '5vh' }} lg={3} md={6} sm={12}>
            <div style={{ color: '#e43e2b', textAlign: 'center' }}>
              <h1>
                {' '}
                {dur}
                +
                {' '}
              </h1>
              <h2>Months</h2>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <i className="far fa-calendar-alt fa-7x" />
            </div>
          </Col>
          <br />
          <Col style={{ paddingBottom: '5vh' }} lg={3} md={6} sm={12}>
            <div style={{ color: '#f0b501', textAlign: 'center' }}>
              <h1>5+ </h1>

              <h2>Workshops</h2>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-laptop-code fa-7x" />
            </div>
          </Col>
          <br />
          <Col style={{ paddingBottom: '5vh' }} lg={3} md={6} sm={12}>
            <div style={{ color: '#2ba24c', textAlign: 'center' }}>
              <h1>
                <CountUp
                  start={69}
                  end={600}
                  duration={6}
                  separator=" "
                  suffix="+"
                />
              </h1>
              <h2>Members</h2>
              <br />
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-users fa-7x" />
            </div>
          </Col>
          <br />
          <Col style={{ paddingBottom: '5vh' }} lg={3} md={6} sm={12}>
            <div style={{ color: '#3b7ded', textAlign: 'center' }}>
              <h1>
                <CountUp
                  start={420}
                  end={999}
                  duration={8}
                  separator=" "
                  suffix="+"
                />
              </h1>
              <h2>Registrations</h2>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-user-friends fa-7x" />
            </div>
          </Col>
          <br />
        </Row>
      </Container>
    </div>
  );
}

export default Stats;
