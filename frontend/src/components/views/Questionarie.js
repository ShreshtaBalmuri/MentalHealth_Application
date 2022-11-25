import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { Card, Container, Row, Col } from "react-bootstrap";

function Questionarie() {

    const formSubmit = (event) =>{
    event.preventDefault();
    
    // Form answer submitted data, API to call from backend
    console.log(answerOne);
    console.log(answerTwo);
    console.log(answerThree);
        
    };

    const [answerOne, setanswerOne] = useState();
    const [answerTwo, setanswerTwo] = useState();
    const [answerThree, setanswerThree] = useState();
   

    const onValueChangeAnswerOne = (event) =>{
        setanswerOne(event.target.value);

    };
    const onValueChangeAnswerTwo = (event) =>{
        setanswerTwo(event.target.value);

    };
    const onValueChangeAnswerThree = (event) =>{
        setanswerThree(event.target.value);

    };



  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Questionarie </Card.Title>
              </Card.Header>

              <Card.Body>

              <form onSubmit={formSubmit}>

                <div>
                    <text> Q1. Little interest or pleasure in doing things?</text>
                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Not at all"
                        checked={answerOne === "Not at all"}
                        onChange={onValueChangeAnswerOne}
                        />
                         Not at all
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Several days"
                        checked={answerOne === "Several days"}
                        onChange={onValueChangeAnswerOne}
                        />
                         Several days
                    </label>
                    </div>

                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="More than half the days"
                        checked={answerOne === "More than half the days"}
                        onChange={onValueChangeAnswerOne}
                        />
                         More than half the days
                    </label>
                    </div>
                </div>

                <br/>


                <div>
                    <text> Q2. Feeling down, depressed, or hopeless?</text>
                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Not at all"
                        checked={answerTwo === "Not at all"}
                        onChange={onValueChangeAnswerTwo}
                        />
                         Not at all
                    </label>
                    </div>

                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Several days"
                        checked={answerTwo === "Several days"}
                        onChange={onValueChangeAnswerTwo}
                        />
                         Several days
                    </label>
                    </div>

                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="More than half the days"
                        checked={answerTwo === "More than half the days"}
                        onChange={onValueChangeAnswerTwo}
                        />
                         More than half the days
                    </label>
                    </div>
                </div>
            
                <br/>

                <div>
                    <text> Q3. Trouble falling or staying asleep, or sleeping too much?</text>
                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Not at all"
                        checked={answerThree === "Not at all"}
                        onChange={onValueChangeAnswerThree}
                        />
                         Not at all
                    </label>
                    </div>

                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Several days"
                        checked={answerThree === "Several days"}
                        onChange={onValueChangeAnswerThree}
                        />
                         Several days
                    </label>
                    </div>

                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="More than half the days"
                        checked={answerThree === "More than half the days"}
                        onChange={onValueChangeAnswerThree}
                        />
                         More than half the days
                    </label>
                    </div>
                </div>
                
                <br/>

                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            
                </form>

              </Card.Body>
             
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

 export default Questionarie;
