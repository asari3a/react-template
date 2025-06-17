import { Container, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <header>
            <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Title</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}