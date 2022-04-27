// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// local
import { Header } from "./header";

/**
 * Create root component application.
 * @returns return root component.
 */
function RootComponent() {
    return <>
    <Header></Header>
    </>;
}

// ========================================
const root = createRoot(document.getElementById('app') ?? document.body);
root.render(<RootComponent />, );
