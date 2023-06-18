/* eslint-disable @typescript-eslint/no-unused-vars */
import { faAnglesUp, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Badge, ProgressBar } from 'react-bootstrap';
import { ListJobProps } from '../../Model/ListJob';
import './CardJob.scss';
import { useState } from 'react';

interface CardJobProps {
    Job: ListJobProps;
}
const CardJob: React.FC<CardJobProps> = ({ Job }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { id, task, status, deadline, steps, description, project, type, priority, groupname } =
        Job;

    return (
        <div
            className={`CardJob_wrapper position-relative bg ${
                priority && status !== 'Done' ? 'priority' : ''
            }`}
        >
            {/* Badge status */}
            <button
                className={`p-1 position-absolute end-3 ${showDetails ? 'top-2' : 'top-5'}`}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            >
                <Badge
                    bg={`${
                        status === 'Todo'
                            ? 'secondary'
                            : status === 'Processing'
                            ? 'info'
                            : 'success'
                    }`}
                >
                    {status}
                </Badge>
            </button>

            {/* Card head */}
            <div
                onClick={() => {
                    setShowDetails(!showDetails);
                }}
                className="mb-2 CardJob_head d-flex justify-content-start align-items-center"
                style={{ width: '83%' }}
            >
                <FontAwesomeIcon
                    className={`CardJob_IconAngles text-danger ${showDetails ? 'rotated' : ''}`}
                    icon={faAnglesUp}
                    size="lg"
                />
                <div className="ms-2 fw-medium">{task}</div>
            </div>

            {/* Card descriptions */}
            <div className="mb-4">
                <div className="small">{description}</div>
            </div>

            {/* Card foot */}
            <div
                className={`position-absolute start-1 end-3 ${
                    showDetails ? 'bottom-3' : 'bottom-10'
                }`}
            >
                <div className="flex-grow-1 position-relative">
                    <div className="linear-color small position-absolute end-0 bottom-100">
                        {moment(deadline).format('DD-MM-YYYY')}
                    </div>
                    <ProgressBar now={2} className="ms-2 mt-2" />
                </div>
            </div>

            {/* Phần mở rộng chứa các step */}
            {showDetails && (
                <div className={`content ${showDetails ? 'open' : ''} `}>
                    <div className="mt-4 mb-5 ">
                        {steps.map((step, index) => (
                            <div key={index} className="position-relative">
                                <hr />

                                <button
                                    className="p-1 position-absolute end-0 top-15"
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}
                                >
                                    <Badge
                                        bg={`${
                                            step.stt === 'Todo'
                                                ? 'secondary'
                                                : step.stt === 'Processing'
                                                ? 'info'
                                                : 'success'
                                        }`}
                                    >
                                        {step.stt}
                                    </Badge>
                                </button>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="text-info" icon={faTag} />
                                    <div className="ms-2">Bước {index + 1}</div>
                                </div>
                                <div className="small">{step.name}</div>
                            </div>
                        ))}
                        <hr />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardJob;
