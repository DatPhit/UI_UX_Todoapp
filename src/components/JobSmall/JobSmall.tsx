import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressBar } from 'react-bootstrap';

function JobSmall() {
    const now = 60;
    return (
        <div className="mt-3">
            <div className="">Triển khai trang web</div>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faClockRotateLeft} size="xs" />
                <div className="ms-2 fw-medium">01 | 10 : 31 </div>
                <div className="flex-grow-1 position-relative">
                    <div
                        className="small position-absolute end-0 bottom-50"
                        style={{ color: 'var(--linear-color)' }}
                    >
                        {now}%
                    </div>
                    <ProgressBar now={60} className="ms-2 mt-2" />
                </div>
            </div>
        </div>
    );
}

export default JobSmall;
