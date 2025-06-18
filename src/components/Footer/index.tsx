import { Navbar, Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
            <Navbar variant="dark" bg="primary" fixed="bottom">
                <Container>
                    <Navbar.Text>
                        Template Footer.
                    </Navbar.Text>
                </Container>
            </Navbar>
        </footer>
    )
}