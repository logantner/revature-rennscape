import React from 'react';

export default function RankingsView(props) {
    return (
        <div className="wrapper">
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>
                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li><a href="/#/">Total</a></li>
                    <li><a href="/">Attack</a></li>
                    <li><a href="/">Strength</a></li>
                    <li><a href="/">Defence</a></li>
                </ul>
            </nav>

            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="/" className="btn btn-success" id="menu-toggle">Toggle Menu</a>
                        </div>
                    </div>
                </div>
        </div>


        </div>
        
    )
}