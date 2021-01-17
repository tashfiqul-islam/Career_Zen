import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    Card,
    CardTitle,
    CardText,
    CardColumns,
    Alert
} from "reactstrap";

import UseAuth from "../Store/UseAuth";

const TaskManager = props => {
    // Create Task Modal Methods
    const { className } = props;

    // Future Implementation
    // const { checked, setChecked } = useState(false);
    // const handleChecked = e => {
    //     e.preventDefault();
    //     setChecked(e.target.checked);
    // };

    // UI Functions Add Task
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const externalCloseBtn = (
        <button
            className="close"
            style={{
                position: "absolute",
                top: "15px",
                right: "15px"
            }}
            onClick={toggle}
        >
            &times;
        </button>
    );

    // UI Functions Edit Task
    const [editModal, setEditModal] = useState(false);
    const Edittoggle = () => setEditModal(!editModal);
    const externalCloseBtnEdit = (
        <button
            className="close"
            style={{
                position: "absolute",
                top: "15px",
                right: "15px"
            }}
            onClick={Edittoggle}
        >
            &times;
        </button>
    );

    const { state } = UseAuth();
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "",
        date: "",
        time: ""
    });

    const [showTask, setShowtask] = useState("");

    const [editTaskData, setEditTaskData] = useState({
        id: "",
        title: "",
        description: "",
        status: "",
        date: "",
        time: ""
    });

    const [isCompleted, setCompleted] = useState(false);
    const [token, settoken] = useState("");

    useEffect(() => {
        settoken(state.token);
        try {
            axios
                .get("http://127.0.0.1:8000/api/todo", {
                    headers: {
                        Authorization: "Bearer " + state.token
                    }
                })
                .then(response => {
                    if (response.data.status === 200) {
                        setShowtask(JSON.stringify(response.data.tasks));
                        console.log(showTask);
                    }
                });
        } catch (e) {
            console.log(e);
        }
        // console.log(showTask);
    });

    const AddTask = async e => {
        e.preventDefault();
        // const token = localStorage.getItem(token);
        // console.log(state.token);

        // localStorage.setItem("token", state.token);
        // console.log(task);
        // console.log(task.date);
        try {
            // const token = state.token;

            const response = await axios.post(
                "http://127.0.0.1:8000/api/todo",
                task,
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            // task
            setCompleted(true);
            console.log(response);
            console.log(token);
            setModal(!modal);
            if (response.data.status === 200) {
                console.log(posted);
            }
        } catch (e) {
            console.log(e);
            setCompleted(false);
        }
    };

    const editTask = async (e, id) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/todo", {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteTask = async e => {};

    return (
        <React.Fragment>
            <Container className="themed-container" fluid="md">
                <div
                    style={{
                        position: "relative",
                        textAlign: "center"
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "cursive",
                            paddingTop: "1rem"
                        }}
                    >
                        Task / Todo List Manager
                    </h1>
                    <div className="Add-Task-Modal">
                        <Button
                            color="primary"
                            onClick={toggle}
                            size="lg"
                            style={{
                                size: "2rem"
                            }}
                        >
                            Add Task
                        </Button>
                        <Modal
                            isOpen={modal}
                            toggle={toggle}
                            className={className}
                            external={externalCloseBtn}
                        >
                            <ModalHeader>
                                <FormGroup>
                                    <Label for="Title">Title</Label>
                                    <Input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                        onChange={e => {
                                            setTask({
                                                ...task,
                                                [e.target.name]: e.target.value
                                            });
                                        }}
                                    />
                                </FormGroup>
                            </ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="Description">
                                        {" "}
                                        Description
                                    </Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="description"
                                        onChange={e => {
                                            setTask({
                                                ...task,
                                                [e.target.name]: e.target.value
                                            });
                                        }}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleDate">Date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="date placeholder"
                                        onChange={e => {
                                            console.log(typeof e.target.value);
                                            console.log(e.target.value);
                                            setTask({
                                                ...task,
                                                [e.target.name]: e.target.value
                                            });
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleTime">Time</Label>
                                    <Input
                                        type="time"
                                        name="time"
                                        id="exampleTime"
                                        placeholder="time placeholder"
                                        onChange={e => {
                                            setTask({
                                                ...task,
                                                [e.target.name]: e.target.value
                                            });
                                        }}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="Status">Status</Label>
                                    <Input
                                        type="text"
                                        name="Status"
                                        id="Status"
                                        placeholder="Status"
                                        onChange={e => {
                                            setTask({
                                                ...task,
                                                status: e.target.value
                                            });
                                        }}
                                    />
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={AddTask}>
                                    Add Task
                                </Button>
                                <Button color="secondary" onClick={toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </Container>
            <div
                style={{
                    alignItems: "center",
                    padding: "2rem"
                }}
            >
                <Alert color="primary">
                    <h4
                        style={{
                            textAlign: "center",
                            fontSize: "2rem"
                        }}
                    >
                        List of Tasks
                    </h4>
                </Alert>
            </div>

            {/* List of tasks ------------------------ */}
            <Container className="themed-container" fluid="md">
                <div>
                    <CardColumns>
                        <Card
                            body
                            inverse
                            // color="primary"
                            style={{
                                backgroundColor: "#0d0c52",
                                borderColor: "#333"
                                // color: "black"
                            }}
                            className="text-center"
                        >
                            <CardTitle tag="h2">Title : title</CardTitle>
                            <CardText tag="h4">Description : desc</CardText>
                            <CardText tag="h4">Status : status</CardText>
                            <CardText tag="h4">Deadline : date</CardText>
                            <CardText tag="h4">Deadline : time</CardText>
                            <div
                                style={{
                                    padding: "1rem"
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: "black"
                                    }}
                                    onClick={Edittoggle}
                                >
                                    Edit
                                </Button>

                                {/* Edit Button ---------------------------- */}
                                <div>
                                    <Modal
                                        isOpen={editModal}
                                        toggle={Edittoggle}
                                        className={className}
                                        external={externalCloseBtnEdit}
                                    >
                                        <ModalHeader>
                                            <FormGroup>
                                                <Label for="Title">Title</Label>
                                                <Input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    placeholder="Title"
                                                    onChange={e => {
                                                        setTask({
                                                            ...task,
                                                            [e.target.name]:
                                                                e.target.value
                                                        });
                                                    }}
                                                />
                                            </FormGroup>
                                        </ModalHeader>
                                        <ModalBody>
                                            <FormGroup>
                                                <Label for="Description">
                                                    {" "}
                                                    Description
                                                </Label>
                                                <Input
                                                    type="textarea"
                                                    name="description"
                                                    id="description"
                                                    onChange={e => {
                                                        setTask({
                                                            ...task,
                                                            [e.target.name]:
                                                                e.target.value
                                                        });
                                                    }}
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="exampleDate">
                                                    Date
                                                </Label>
                                                <Input
                                                    type="date"
                                                    name="date"
                                                    id="exampleDate"
                                                    placeholder="date placeholder"
                                                    onChange={e => {
                                                        console.log(
                                                            typeof e.target
                                                                .value
                                                        );
                                                        console.log(
                                                            e.target.value
                                                        );
                                                        setTask({
                                                            ...task,
                                                            [e.target.name]:
                                                                e.target.value
                                                        });
                                                    }}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleTime">
                                                    Time
                                                </Label>
                                                <Input
                                                    type="time"
                                                    name="time"
                                                    id="exampleTime"
                                                    placeholder="time placeholder"
                                                    onChange={e => {
                                                        setTask({
                                                            ...task,
                                                            [e.target.name]:
                                                                e.target.value
                                                        });
                                                    }}
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="Status">
                                                    Status
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="Status"
                                                    id="Status"
                                                    placeholder="Status"
                                                    onChange={e => {
                                                        setTask({
                                                            ...task,
                                                            status:
                                                                e.target.value
                                                        });
                                                    }}
                                                />
                                            </FormGroup>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button
                                                color="primary"
                                                onClick={editTask}
                                            >
                                                Edit Task
                                            </Button>{" "}
                                            <Button
                                                color="secondary"
                                                onClick={Edittoggle}
                                            >
                                                Cancel
                                            </Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                {/* -------------------------------------------- */}
                            </div>
                            <div
                                style={{
                                    padding: "1rem"
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: "black"
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                            {/* <CustomInput
                                type="switch"
                                id="exampleCustomSwitch"
                                name="customSwitch"
                                label="Turn on when status : Complete"
                                checked={checked}
                                onChange={handleChecked(e)}
                            /> */}
                        </Card>
                    </CardColumns>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default TaskManager;
