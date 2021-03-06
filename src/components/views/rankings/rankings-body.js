import React from 'react';
import { connect } from "react-redux";

function RankingsBody(props) {
    const attribute = props.activeTab;
    const rankings = props[`rankings_${attribute}`]
    const userKey = attribute === 'total' ? 'username' : 'displayName';
    const scoreKey = attribute === 'total' ? 'totalLevel' : attribute;

    const rows = [];
    for (let idx=0; idx < rankings.length; ++idx) {
        let row = rankings[idx];
        rows.push(
            <tr key={`${attribute}-row-${idx+1}`}>
            <th scope="row">{idx+1}</th>
            <th scope="row">{row[userKey]}</th>
            <th scope="row">{row[scoreKey]}</th>
            </tr>
        );
    }

    return (
        <div id="content" className="container-fluid">
            <div className="row h-100">
                <div className="col pre-scrollable ranking-table-window">
                    <table className="table table-hover table-dark ranking-table">
                        <thead>
                            <tr>
                            <th scope="col" style={{"width":"20%"}}>Rank</th>
                            <th scope="col" style={{"width":"50%"}}>Character</th>
                            <th scope="col" style={{"width":"30%"}}>{attribute} Level</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(store) {
    return {
        rankings_total : store.rankingsTotal,
        rankings_attack : store.rankingsAttack,
        rankings_strength : store.rankingsStrength,
        rankings_defence : store.rankingsDefence,
    };
}

export default connect(mapStateToProps)(RankingsBody);

