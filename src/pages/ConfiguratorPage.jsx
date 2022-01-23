import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { getConfigurator } from "../redux/Configurator/configuratorSlice";
import { FaDollarSign } from "react-icons/fa";
import Loader from "../components/Loader";
import { toastComponent } from "../components/Toast";

function ConfiguratorPage() {
  const dispatch = useDispatch();
  const [ingrSpending, setIngrSpending] = useState(0);
  const [employees, setEmployees] = useState(0);
  const calculator = useSelector(
    (state) => state.configurator.configurator.calculator
  );
  const error = useSelector((state) => state.configurator.error);

  useEffect(() => {
    dispatch(getConfigurator());
  }, [dispatch]);
  if (error) {
    toastComponent(error);
  }
  /* Here I used local state for this slider values, and I just connected them with display areas because I was not sure 
  if that is possible to calculate . */
  return (
    <>
      {calculator ? (
        <Container className="configuratorPage">
          <Row className="configuratorPage__row">
            <Col lg={6}>
              <h2>
                <span className="page__heading">
                  {calculator.title.split("Bellotero.io")}
                </span>
                <span className="page__heading">
                  {calculator.title.split("Save more with")}
                </span>
              </h2>
              <p>{calculator.description}</p>
            </Col>
            <Col lg={6}>
              <div className="monthlyIngRSpeending">
                <div className="input__row">
                  <label className="slider__label">
                    Monthly <br></br> ingredient spending
                  </label>
                  <div className="displayPrice">
                    <FaDollarSign className="displayPrice__dollarSign" />
                    <div className="displayPrice__price">
                      {ingrSpending.toLocaleString("de-De")}
                    </div>
                  </div>
                </div>
                <Input
                  style="horizontal__slider"
                  min={0}
                  max={100000}
                  type="range"
                  step={1}
                  changeHandler={(value) => setIngrSpending(value)}
                  value={ingrSpending}
                />

                <div className="input__row">
                  <label className="slider__label">
                    Monthly <br></br> ingredient spending
                  </label>
                  <div className="displayPrice">
                    <FaDollarSign className="displayPrice__dollarSign" />
                    <div className="displayPrice__price">
                      {parseInt(employees)}
                    </div>
                  </div>
                </div>
                <Input
                  style="horizontal__slider employees"
                  min={0}
                  max={10}
                  type="range"
                  step={0.001}
                  changeHandler={(value) => setEmployees(value)}
                  value={employees}
                />
              </div>

              <div className="displayTotal">
                <div className="displayTotal__field">
                  <div className="displayTotal__price">
                    <FaDollarSign className="" />
                    <span className="displayTotal__digits">
                      {employees.toLocaleString()}
                    </span>
                  </div>
                  <p className="displayTotal__label">
                    Estimated cost food savings
                  </p>
                </div>
                <div className="displayTotal__field">
                  <div className="displayTotal__price">
                    <FaDollarSign className="" />
                    <span className="displayTotal__digits">
                      {ingrSpending.toLocaleString("de-De")}
                    </span>
                  </div>
                  <p className="displayTotal__label">
                    Your estimated annual savings
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ConfiguratorPage;
