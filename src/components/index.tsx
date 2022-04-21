// React
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Create root component application.
 * @returns return root component.
 */
function RootComponent() {
    return <div>React work!</div>;
}

// ========================================

ReactDOM.render(<RootComponent />, document.getElementById('root'));
