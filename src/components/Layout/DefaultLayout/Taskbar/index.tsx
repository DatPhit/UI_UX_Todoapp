/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleUser,
    faHouse,
    faPeopleGroup,
    faPlus,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import NavItem from '../../../NavbarItem/NavItem';
import SignOut from '../../../Signout/SignOut';
import './Taskbar.scss';
function Taskbar() {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <div className="d-flex flex-column positon-relative">
            <div className="p-2 mt-2 d-flex align-items-center w-100 fs-6 ">
                {!isSignIn && (
                    <>
                        <FontAwesomeIcon icon={faCircleUser} style={{ height: '3.2rem' }} />
                        <Link to="/sign-up" className="taskbar_link ms-2 me-1">
                            Đăng ký
                        </Link>
                        /
                        <Link to="/sign-in" className="taskbar_link ms-1">
                            Đăng nhập
                        </Link>
                    </>
                )}
                {isSignIn && (
                    <>
                        <img
                            // https://cdn2.iconfinder.com/data/icons/people-around-the-world/512/10-512.png
                            // https://cdn0.iconfinder.com/data/icons/kids-avatars/512/50_Kids_Icons-11-512.png
                            // https://i.pinimg.com/originals/2c/8d/68/2c8d68b94893461a6ef19b1e39a54bc0.png
                            src="https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/133-512.png"
                            alt="hinhanh"
                            className="taskbar-img"
                        />
                        <div className="ms-2 d-flex flex-column">
                            <div className="fw-medium">Quang Đạt</div>
                            <div className="small">Sinh viên</div>
                        </div>
                    </>
                )}
            </div>

            <NavItem
                text="Dashboard"
                classN={`${isSignIn ? 'active' : ''}`}
                icon={faHouse}
                href="/"
            />
            <NavItem text="Xem nhóm" icon={faPeopleGroup} href="/group" />
            <NavItem text="Thông tin cá nhân" icon={faUser} href="/me" />
            <NavItem text="Thêm công việc mới" icon={faPlus} href="/add-task" />

            {isSignIn && (
                <span className="w-100 position-absolute bottom-15">
                    <SignOut />
                </span>
            )}
        </div>
    );
}

export default Taskbar;
