import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";

const Header = ({ setSearch, setCity }) => {
  const handleTest = (e) => {
    setSearch(e.target.value);
  };

  const options = [
    { value: "台北市", label: "台北市" },
    { value: "np", label: "新北市" },
    { value: "ty", label: "桃園市" },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              width="60"
              height="60"
              src="https://www.youbike.com.tw/region/assets/images/logo.svg"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#instruction">使用說明</Nav.Link>
              <Nav.Link href="#Charge">收費方式</Nav.Link>
              <Nav.Link href="#information">站點資訊</Nav.Link>
              <Nav.Link href="#news">最新消息</Nav.Link>
              <Nav.Link href="#campaign">活動專區</Nav.Link>
            </Nav>

            <Button
              primary="primary"
              className="rounded-pill"
              style={{ backgroundColor: "#889d00", border: "none" }}
            >
              登入
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3 mb-3">
        <div className="fs-2" style={{ color: "#889d00", border: "none" }}>
          站點資訊
        </div>
        <Row xs={6}>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 2, order: 1 }}>
            <Select
              options={options}
              defaultValue={"請選擇縣市"}
              isSearchable
              isClearable
              onChange={(option) =>
                option ? setCity(option.label) : setCity("")
              }
            />
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 3, order: 2 }}>
            <Form.Control
              placeholder="搜尋站點"
              as="input"
              onChange={handleTest}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
