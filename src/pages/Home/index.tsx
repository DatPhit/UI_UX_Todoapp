import { Badge, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faFilter } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import JobSmall from '../../components/JobSmall/JobSmall';
import Notification from '../../components/Notification/Notification';
import { ListJobProps } from '../../Model/ListJob';
import { TodoJobs, ProcessingJobs, DoneJobs } from '../../Services/ProjectsService';
import CardJob from '../../components/CardJob/CardJob';
function Home() {
    return (
        <div>
            {/* Phần đầu của content */}
            <Row className="gap-2" style={{ height: '29vh' }}>
                <Col xs={9} className="bg rounded-4">
                    <Row>
                        {/* Mục tiêu cá nhân */}
                        <Col className="home_col_head">
                            <div className="home_head_content">Mục tiêu cá nhân</div>
                            <div className="overflow-y-scroll" style={{ height: '80%' }}>
                                <div className="mt-3 mx-4 ">
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                </div>
                            </div>
                        </Col>

                        {/* Mục tiêu nhóm */}
                        <Col className="home_col_head ms-2">
                            <div className="home_head_content">Mục tiêu nhóm</div>
                            <div className="overflow-y-scroll" style={{ height: '80%' }}>
                                <div className="mt-3 mx-4">
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                    <JobSmall />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                {/* Notification */}
                <Col className="bg home_col_head ms-2" style={{ backgroundColor: '#343446' }}>
                    <div className="home_head_content home_notifyication">
                        Thông báo
                        <div className="position-relative">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="position-absolute top-20 right-20 translate-middle p-1 bg-danger rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </div>
                    </div>
                    <div className="overflow-y-scroll" style={{ height: '80%' }}>
                        <div className="mt-2 mx-3">
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Phần Content chính */}
            <div className="mt-3" style={{ height: '62.3vh' }}>
                <Row className="h-100">
                    {/* Cột bên trái chứa filter */}
                    <Col xs={1} className="p-0" style={{ width: '6%' }}>
                        {/* Button filter */}
                        <button className="p-2 center home_button_filter w-100 fs-6 rounded-2">
                            <FontAwesomeIcon icon={faFilter} />
                            <span className=" ms-2">Filter</span>
                        </button>

                        {/* Nav lọc công việc theo type */}
                        <div className="bg mt-3 h-100 d-flex flex-column align-items-center rounded-3">
                            <div className="mt-2 mb-3 fw-medium ">Type</div>
                            <button className="home_filter_type type_active mb-4">ALL</button>
                            <button className="home_filter_type mb-4">Group</button>
                            <button className="home_filter_type mb-4">Me</button>
                        </div>
                    </Col>

                    {/* Cột bên phải chứa content chính */}
                    <Col className="ms-3 p-0">
                        {/* Head */}
                        <div className="home_content_header d-flex justify-content-around align-items-center rounded-4">
                            <div className="d-flex align-items-center">
                                <div>To do task</div>
                                <span
                                    className="ms-1 center small fw-medium text-bg-secondary rounded-circle"
                                    style={{ width: '1.6rem', height: '1.6rem' }}
                                >
                                    4
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>In process</div>
                                <span
                                    className="ms-1 center small fw-medium text-info rounded-circle"
                                    style={{
                                        width: '1.6rem',
                                        height: '1.6rem',
                                        backgroundColor: '#4e677b',
                                    }}
                                >
                                    8
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>Done</div>
                                <span
                                    className="ms-1 center small fw-medium rounded-circle"
                                    style={{
                                        width: '1.6rem',
                                        height: '1.6rem',
                                        backgroundColor: '#51715d',
                                        color: '#5eff5a',
                                    }}
                                >
                                    10
                                </span>
                            </div>
                        </div>

                        {/* Todolist */}
                        <div className="mt-3 w-100 h-100 d-flex justify-content-between">
                            {/* Cột to-do */}
                            <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '62.3vh' }}
                            >
                                {/* Card */}
                                {TodoJobs.map((TodoJob: ListJobProps) => (
                                    <CardJob Job={TodoJob} />
                                ))}
                            </div>

                            {/* Cột Processing */}
                            <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '62.3vh' }}
                            >
                                {/* Card */}
                                {ProcessingJobs.map((ProcessingJob: ListJobProps) => (
                                    <CardJob Job={ProcessingJob} />
                                ))}
                            </div>

                            {/* Cột Done */}
                            <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '62.3vh' }}
                            >
                                {/* Card */}
                                {DoneJobs.map((DoneJob: ListJobProps) => (
                                    <CardJob Job={DoneJob} />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;
