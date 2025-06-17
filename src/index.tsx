import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';

export default function App() {
    return (
        <Header />
    )
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);