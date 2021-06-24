import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../../Assets/images/Logo.png';
import menu from '../../Assets/images/menu.svg';
import { Button } from '../../Button';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <Navbar color='light' expand='lg' style={{ padding: '0.5rem 1rem' }}>
        <NavbarBrand href='/'>
          <img src={logo} alt='' width='220' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className='navbar-toggler-icon'>
            <img src={menu} alt='' />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ marginLeft: 'auto' }} navbar>
            <NavItem>
              <NavLink href='#'>
                <Button
                  buttonText='Create account
'
                />
              </NavLink>
            </NavItem>

            <NavItem className='signin'>
              <NavLink href='#'>
                <Button buttonText='Login' />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
