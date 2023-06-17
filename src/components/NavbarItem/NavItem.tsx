import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import './navitem.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

interface NavItemProps {
    text: string;
    classN?: string;
    icon: IconProp;
    href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, classN, icon, href }) => {
    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttons = document.querySelectorAll('.nav-button');
        const icons = document.querySelectorAll('.nav-icons');

        buttons.forEach((button) => {
            button.classList.remove('nav_active');
        });
        icons.forEach((icon) => {
            icon.classList.remove('end-10');
        });

        e.currentTarget.classList.add('nav_active');
    };
    return (
        <Link to={`${href}`}>
            <Button
                variant="dark"
                onClick={handleClickButton}
                className={`nav-button mt-4 fs-6 w-100 d-flex justify-content-start align-items-center position-relative ${classN}`}
                style={{ backgroundColor: '#464665', minHeight: 70 }}
            >
                {icon && (
                    <span className="me-2 fs-6">
                        <FontAwesomeIcon icon={icon} />
                    </span>
                )}
                {text}
                <span className="nav-icons position-absolute end-15 ">
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
            </Button>
        </Link>
    );
};

export default NavItem;
