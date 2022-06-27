import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggler = () => setShow(!show);

  return (
    <div>
      <Navbar color="secondary" expand="md" fixed="top" container="md" light>
        <NavbarBrand href="/">Dev-Darz</NavbarBrand>
        <NavbarToggler onClick={handleToggler} />
        <Collapse isOpen={show} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">My Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
