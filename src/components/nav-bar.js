import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import AuthNav from './auth-nav'

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>

    <NavDropdown title="Usuários">
        <NavDropdown.Item>
            <Nav.Link as={RouterNavLink} to="/usuario/add" className="nav-link">Adicionar</Nav.Link>                      
        </NavDropdown.Item>
        <NavDropdown.Item>
            <Nav.Link as={RouterNavLink} to="/usuario/todos" className="nav-link">Mostrar Todos</Nav.Link>
        </NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Controle de Qualidade">
        <NavDropdown title="Curiômetro">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/curiometro/add" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/curiometro/todos" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>


        <NavDropdown title="Gama-Câmara">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>


        <NavDropdown title="Gama-Câmara SPECT">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>


        <NavDropdown title="Gama-Câmara SPECT/CT">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>


        <NavDropdown title="PET/CT">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>


        <NavDropdown title="Gama Probe">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>


        <NavDropdown title="Captador">
          <NavDropdown title="Testes Diários">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Exatidão e Precisão">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Geometria">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown.Divider />

          <NavDropdown title="Linearidade">
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Mostrar Todos</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
    </NavDropdown>

    <NavDropdown title="Fontes">
        <NavDropdown.Item>
            <Nav.Link as={RouterNavLink} to="/selada/add" className="nav-link">Adicionar Fonte Selada</Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
            <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Fontes Seladas</Nav.Link>
        </NavDropdown.Item>

        <NavDropdown.Divider />

        <NavDropdown.Item>
            <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Adicionar Fonte Não Selada</Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
            <Nav.Link as={RouterNavLink} to="/construcao" className="nav-link">Fontes Não Seladas</Nav.Link>
        </NavDropdown.Item>
    </NavDropdown>

    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Perfil
    </Nav.Link>
  </Nav>
);

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;