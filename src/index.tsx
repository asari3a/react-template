import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <p>Main Content.</p>
            </main>
        </>
    )
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);