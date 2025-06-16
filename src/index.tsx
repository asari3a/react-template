import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
    return (
        <>
            <h1>Hello World.</h1>
        </>
    )
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);