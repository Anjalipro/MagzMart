import react,{useState} from 'react';
import {Form,Button, Container ,Row,Col} from 'react-bootstrap';


const SignIn = () => {
    const [userdetails, setuserdetails] = useState({ username: "", password: "" });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setuserdetails((prevState) => ({ ...prevState, [name]: value }));
        console.log(value)
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
      };
    
return(
    <Container className = "loginContainer" fluid="md" >
        <Row className="justify-content-md-center loginContainer align-items-center">
        <Col md={4}>
        <h3 className="mb-4  text-center">
           {" "}
            {"LOGIN FORM"}{" "}
          </h3>
    <Form onSubmit={handleSubmit} className = "loginForm" >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={handleChange} />
    <Form.Text className="text-muted">
      Please use your AD-ONE Credentials
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</Col>
</Row>
</Container>
)
}

export default SignIn;