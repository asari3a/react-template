import { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

export default function TemplateApp() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <SideBar isOpen={isSidebarOpen} onClose={closeSidebar}/>
            <main>
                <p>Main Content.</p>
            </main>
            <Footer />
        </>
    )
}