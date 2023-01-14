import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: 'forestgreen' }}>
      <Container>
        <Navbar.Brand>
          <h2 className="heading-text">PHOTO <span> GALLARY</span></h2>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default Header;