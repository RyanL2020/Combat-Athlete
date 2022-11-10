import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FighterContainer from './FighterContainer';

const Layout = () => {
    return (
        <Container>
            <Row>
            <Col> <FighterContainer /> </Col>
 
            </Row>
        </Container>
    );
}

export default Layout;