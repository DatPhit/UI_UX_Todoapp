import { Form, Button } from 'react-bootstrap';
import './signup.scss';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: '15vh' }}>
            <Form className="" style={{ width: '35%' }}>
                <h2 className="text-center mb-3">Đăng ký tài khoản</h2>
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Họ và Tên</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput2">
                    <Form.Label>Nhập địa chỉ email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput3">
                    <Form.Label>Nhập mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="ControlInput4">
                    <Form.Label>Nhập lại mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <div className="mt-4 text-center w-100">
                    <Button type="submit" className="fs-5 signup_button">
                        Đăng ký
                    </Button>
                </div>
                <div className="mt-3 d-flex justify-content-center" style={{ fontSize: '0.9rem' }}>
                    <div>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to="/sign-in" className="signup_link ms-1">
                            Đăng nhập ngay
                        </Link>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default SignUp;
