// React
import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Create root component application.
 * @returns return root component.
 */
function RootComponent() {
    return <div>React work!</div>;
}

// ========================================
const root = createRoot(document.getElementById('app') ?? document.body);
root.render(<RootComponent />, );
