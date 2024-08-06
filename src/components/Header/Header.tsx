import React from 'react';
import style from './style.module.scss'

const Header: React.FC = () => {
    return (
        <header className={style.container}>
            <h2>Im a header</h2>
        </header>
    );
};

export {Header};
