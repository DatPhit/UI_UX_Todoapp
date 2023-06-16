import { ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Taskbar from './Taskbar';
import { Col, Row } from 'react-bootstrap';

interface DefaultLayoutProps {
    children?: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        /* <Header /> */

        <Container fluid>
            <Row className="gap-3" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
                <Col
                    className="bg px-0 position-fixed"
                    style={{ height: '100vh', width: '17vw', borderRadius: 10 }}
                >
                    <Taskbar />
                </Col>
                <Col className="" style={{ marginLeft: '17.5vw', borderRadius: 10 }}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default DefaultLayout;
