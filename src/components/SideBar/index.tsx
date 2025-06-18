import { Offcanvas } from "react-bootstrap";

type SideBarProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
    return (
        <Offcanvas show={isOpen} onHide={onClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>SideBar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>This is a content within an SideBar.</p>
            </Offcanvas.Body>
        </Offcanvas>
    )
}