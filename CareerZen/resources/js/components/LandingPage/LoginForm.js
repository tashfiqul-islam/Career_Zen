import React from "react";
import { Element } from "react-scroll";
import { Container, Row, Col } from "reactstrap";
import "../../../css/login.css";

function LoginForm() {
    return (
        <React.Fragment>
            <Container className="themed-container" fluid="md">
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Element id="login" className="login-form">
                            <form>
                                <h3>Sign In</h3>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="customCheck1"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Submit
                                </button>
                                <p className="forgot-password text-right">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </form>
                        </Element>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default LoginForm;
