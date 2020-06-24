import React from 'react';

export default function RankingsBody(props) {
    return (
        <div id="content" className="container-fluid">
            {/* <div className="container-fluid"> */}
                <div className="row h-100">
                    <div className=" ranking-table-window overflow-auto">
                        {/* <a href="/" className="btn btn-success" id="menu-toggle">Toggle Menu</a> */}
                        The active tab is: {props.activeTab}
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}