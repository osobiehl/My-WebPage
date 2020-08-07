import React from 'react';
import {Link} from 'gatsby';
import './Header.css'
function Header(){
    return(
        <div className="header">
            <div className="nav-wrapper">
            <nav>
                <div className="dropdown">
                    <span>
                        <p>hover here</p>
                        <div className="dropdown-content">
                            <ul>
                                <Link to="/">Home</Link>
                                <Link to="/test">test</Link>
                                <Link to="test+1">other test</Link>
                            </ul>
                        </div>
                    </span>
                </div>
            </nav>
            </div>
        </div>
    )
}

function NavigationRow(props){
    const rows = [];
        props.Data.forEach((data)=>{
        rows.push(<Link to={data.to} key={data.to}>{data.name}</Link>);
    });
        return(
            <ul className="nav-dropdown">
                {rows}
            </ul>
        )
}

export default Header;
