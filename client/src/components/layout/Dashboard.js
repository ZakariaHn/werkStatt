import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <div>
            <div className="dash-nav">Clients</div>
            <div className="dash-nav">Cars</div>
            <div className="dash-nav">Operations</div>
        </div>
    )
}
