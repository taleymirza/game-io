import React from 'react';

type HeaderProps = {
    room: string
}

const Header= ({room}: HeaderProps): JSX.Element  => {
    return (
    <header className="header">

        <div>Logo</div>
        <div>Company name and {room}</div>
    </header>)

}


export default Header