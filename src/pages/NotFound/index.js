import React from 'react';

import './styles.css'

const NotFound = () => {
    
    document.title = 'Página não encontrada'

    return (
        <div className="notfound-container">
            <h4>NotFound</h4>
        </div>
    );
}

export default NotFound;