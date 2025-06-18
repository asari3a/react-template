import { Container, Navbar, Button } from "react-bootstrap";

type HeaderProps = {
    toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    return (
        <header>
            <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
                <Container>
                    <Button onClick={toggleSidebar}>
                        Menu
                    </Button>
                    <Navbar.Brand href="/">Title</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}