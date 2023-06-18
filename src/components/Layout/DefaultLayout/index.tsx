import { ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Taskbar from './Taskbar';

interface DefaultLayoutProps {
    children?: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        /* <Header /> */

        <Container fluid className="p-0 overflow-hidden">
            <div className="d-flex " style={{ height: '100vh', backgroundColor: 'black' }}>
                {/* Thanh taskbar */}
                <div className="bg px-0 rounded-4" style={{ height: '100vh', width: '17.5vw' }}>
                    <Taskbar />
                </div>
                {/* Cột content */}
                <div className="ms-4 me-3" style={{ height: '100vh', width: '81.5vw' }}>
                    {children}
                </div>
            </div>
        </Container>
    );
}

export default DefaultLayout;
