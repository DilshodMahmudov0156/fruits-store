import React from 'react';

function Header({}) {
    return (
        <header>
            <div className="masc">
                <h1 className="text-light text-center">
                    Dou you want to eat fresh fruits?
                    <br/>
                    <span>
                        Let's begin with us!
                    </span>
                    <br/>
                    <button className="btn btn-success btn-lg mt-5">start shopping</button>
                </h1>
            </div>
        </header>
    );
}

export default Header;