import React from 'react';
import {Row, Col} from "react-bootstrap";
import Card from "../../Card";

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Row>
                    <Col sm={12} className={"text-center"}>
                        <p>Loading...</p>
                    </Col>
                </Row>
            </>
        );
    }

}

export default Loading;