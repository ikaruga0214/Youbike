import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const Body = ({ selected, areaData, setIsSelected }) => {
  const [checkAll, setCheckAll] = useState(true);

  const handleSelectAll = (e) => {
    setCheckAll((checkAll) => !checkAll);

    setIsSelected(e.target.checked ? areaData : []);
  };

  const handleSelect = (value, name) => {
    if (value) setIsSelected([...selected, name]);
    else setIsSelected(selected.filter((item) => item !== name));
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Check
            type="checkbox"
            label={"全部勾選"}
            checked={checkAll}
            onChange={handleSelectAll}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={5}>
          <Row>
            {areaData.map((item, index) => (
              <Col key={index} xs={4} xl={3} className="pt-3">
                <Form.Check
                  id={item}
                  type="checkbox"
                  label={`${item}`}
                  value={item}
                  checked={checkAll || selected.includes(item) ? true : false}
                  onChange={() => {
                    let checkbox = document.getElementById(`${item}`);

                    if (checkAll) {
                      setCheckAll(!checkAll);
                      handleSelect(checkbox.checked, item);
                    }
                    handleSelect(checkbox.checked, item);
                  }}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col className="d-none d-md-block"></Col>

        <Col className="d-none d-md-block" xs={6}>
          <Row>
            <Image
              src="https://media.cnn.com/api/v1/images/stellar/prod/best-gravel-bikes-lead-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"
              fluid
              style={{ height: "192px" }}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Body;
