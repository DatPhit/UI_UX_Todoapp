import { Col, ProgressBar, Row } from 'react-bootstrap';
import './Home.scss';
import JobSmall from '../../components/JobSmall/JobSmall';
function Home() {
    return (
        <div>
            <Row className=" gap-2" style={{ height: '29vh' }}>
                <Col xs={8} className="bg rounded-4">
                    <Row>
                        <Col className="home_col_head">
                            <div className="head_content">Mục tiêu cá nhân</div>
                            <div className="overflow-y-scroll" style={{ height: '80%' }}>
                                <div className="mt-2 mx-4 ">
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                </div>
                            </div>
                        </Col>
                        <Col className="home_col_head ms-2">
                            <div className="head_content">Mục tiêu nhóm</div>
                            <div className="mt-2 mx-4">
                                <JobSmall />
                                <JobSmall />
                                <JobSmall />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="ms-2 bg-light">Dat</Col>
            </Row>
        </div>
    );
}

export default Home;
