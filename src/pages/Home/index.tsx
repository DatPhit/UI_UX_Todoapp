import { Badge, Col, ProgressBar, Row } from 'react-bootstrap';
import './Home.scss';
import JobSmall from '../../components/JobSmall/JobSmall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faBell, faFilter } from '@fortawesome/free-solid-svg-icons';
import Notification from '../../components/Notification/Notification';
import { ListProject, ListProjectProps } from '../../Model/ListProject';
import moment from 'moment';
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
                                {ListProject.map((project: ListProjectProps) => {
                                    if (project.status === 'To-do') {
                                        return (
                                            <div
                                                className={`home_card bg ${
                                                    project.priority ? 'priority' : ''
                                                }`}
                                                key={project.id}
                                            >
                                                {/* Badge status */}
                                                <button
                                                    className="p-1 position-absolute end-3 top-5"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                    }}
                                                >
                                                    <Badge bg="secondary">Todo</Badge>
                                                </button>

                                                {/* Card head */}
                                                <div
                                                    className="mb-2 d-flex justify-content-start align-items-center"
                                                    style={{ width: '83%' }}
                                                >
                                                    <FontAwesomeIcon
                                                        className="text-danger"
                                                        icon={faAnglesDown}
                                                        size="lg"
                                                    />
                                                    <div className="ms-2 fw-medium">
                                                        {project.task}
                                                    </div>
                                                </div>

                                                {/* Card descriptions */}
                                                <div>
                                                    <div className="small">
                                                        {project.description}
                                                    </div>
                                                </div>

                                                {/* Card foot */}
                                                <div className="position-absolute bottom-10 start-1 end-3">
                                                    <div className="flex-grow-1 position-relative">
                                                        <div className="linear-color small position-absolute end-0 bottom-100">
                                                            {moment(project.deadline).format(
                                                                'DD-MM-YYYY',
                                                            )}
                                                        </div>
                                                        <ProgressBar
                                                            now={2}
                                                            className="ms-2 mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            {/* Cột Processing */}
                            <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '62.3vh' }}
                            >
                                {/* Card */}
                                {ListProject.map((project: ListProjectProps) => {
                                    if (project.status === 'Processing') {
                                        return (
                                            <div
                                                className={`home_card bg ${
                                                    project.priority ? 'priority' : ''
                                                }`}
                                                key={project.id}
                                            >
                                                {/* Badge status */}
                                                <button
                                                    className="p-1 position-absolute end-3 top-5"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                    }}
                                                >
                                                    <Badge bg="info">Proceesing</Badge>
                                                </button>

                                                {/* Card head */}
                                                <div
                                                    className="mb-2 d-flex justify-content-start align-items-center"
                                                    style={{ width: '83%' }}
                                                >
                                                    <FontAwesomeIcon
                                                        className="text-danger"
                                                        icon={faAnglesDown}
                                                        size="lg"
                                                    />
                                                    <div className="ms-2 fw-medium">
                                                        {project.task}
                                                    </div>
                                                </div>

                                                {/* Card descriptions */}
                                                <div>
                                                    <div className="small">
                                                        {project.description}
                                                    </div>
                                                </div>

                                                {/* Card foot */}
                                                <div className="position-absolute bottom-10 start-1 end-3">
                                                    <div className="flex-grow-1 position-relative">
                                                        <div className="linear-color small position-absolute end-0 bottom-100">
                                                            {moment(project.deadline).format(
                                                                'DD-MM-YYYY',
                                                            )}
                                                        </div>
                                                        <ProgressBar
                                                            now={50}
                                                            className="ms-2 mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            {/* Cột Done */}
                            <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '62.3vh' }}
                            >
                                {/* Card */}
                                {ListProject.map((project: ListProjectProps) => {
                                    if (project.status === 'Done') {
                                        return (
                                            <div className={`home_card bg `} key={project.id}>
                                                {/* Badge status */}
                                                <button
                                                    className="p-1 position-absolute end-3 top-5"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                    }}
                                                >
                                                    <Badge bg="success">Done</Badge>
                                                </button>

                                                {/* Card head */}
                                                <div
                                                    className="mb-2 d-flex justify-content-start align-items-center"
                                                    style={{ width: '83%' }}
                                                >
                                                    <FontAwesomeIcon
                                                        className="text-danger"
                                                        icon={faAnglesDown}
                                                        size="lg"
                                                    />
                                                    <div className="ms-2 fw-medium">
                                                        {project.task}
                                                    </div>
                                                </div>

                                                {/* Card descriptions */}
                                                <div>
                                                    <div className="small">
                                                        {project.description}
                                                    </div>
                                                </div>

                                                {/* Card foot */}
                                                <div className="position-absolute bottom-10 start-1 end-3">
                                                    <div className="flex-grow-1 position-relative">
                                                        <div className="linear-color small position-absolute end-0 bottom-100">
                                                            {moment(project.deadline).format(
                                                                'YYYY-MM-DD',
                                                            )}
                                                        </div>
                                                        <ProgressBar
                                                            now={100}
                                                            className="ms-2 mt-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;
