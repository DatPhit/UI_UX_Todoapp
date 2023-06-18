import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Badge, ProgressBar } from 'react-bootstrap';
import { ListJobProps } from '../../Model/ListJob';
import './CardJob.scss';

interface CardJobProps {
    Job: ListJobProps;
}
const CardJob: React.FC<CardJobProps> = ({ Job }) => {
    const { id, task, status, deadline, steps, description, project, type, priority, groupname } =
        Job;

    // Classname của badge
    let badgeClass = 'secondary';
    if (status === 'Processing') badgeClass = 'info';
    if (status === 'Done') badgeClass = 'success';

    return (
        <div
            className={`CardJob_wrapper position-relative bg ${priority ? 'priority' : ''}`}
            key={id}
        >
            {/* Badge status */}
            <button
                className="p-1 position-absolute end-3 top-5"
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            >
                <Badge bg={badgeClass}>{status}</Badge>
            </button>

            {/* Card head */}
            <div
                className="mb-2 d-flex justify-content-start align-items-center"
                style={{ width: '83%' }}
            >
                <FontAwesomeIcon className="text-danger" icon={faAnglesDown} size="lg" />
                <div className="ms-2 fw-medium">{task}</div>
            </div>

            {/* Card descriptions */}
            <div>
                <div className="small">{description}</div>
            </div>

            {/* Card foot */}
            <div className="position-absolute bottom-10 start-1 end-3">
                <div className="flex-grow-1 position-relative">
                    <div className="linear-color small position-absolute end-0 bottom-100">
                        {moment(deadline).format('DD-MM-YYYY')}
                    </div>
                    <ProgressBar now={2} className="ms-2 mt-2" />
                </div>
            </div>
        </div>
    );
};

export default CardJob;
