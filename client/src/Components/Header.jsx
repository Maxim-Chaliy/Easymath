import React, { useState, useEffect } from "react";
import freeIcon2 from "./img/FreeMathematics2.png";
import { Link, useNavigate } from "react-router-dom";
import '../Components/style/header.css';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <header>
            <div className="header">
                <div className="conteiner">
                    <div className="items">
                        <div className="logo">
                            <Link className="test1" to="/home">
                                <div className="display-flex">
                                    <div className="img-logo"><img src={freeIcon2} alt="" /></div>
                                    <div>
                                        <div className="online-repetitor"><p>Онлайн-репетитор</p></div>
                                        <div className="Easymath"><p>Easymath</p></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex-3">
                            <div className="items-2">
                                <div className="teg-a"><div className="itm" id="a1"><Link className="menu-navigation" to="">ЕГЭ/ОГЭ</Link></div></div>
                                <div className="teg-a"><div className="itm" id="a2"><Link className="menu-navigation" to="">Учебные материалы</Link></div></div>
                                <div className="teg-a"><div className="itm" id="a3"><Link className="menu-navigation" to="/schedule">Расписание</Link></div></div>
                                <div className="teg-a"><div className="itm" id="a4"><Link className="menu-navigation" to="/reviews">Отзывы</Link></div></div>
                            </div>
                        </div>
                        <div className="button-enter">
                            {isAuthenticated ? (
                                <button className="Btn" onClick={handleLogout}>
                                    <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                                    <div className="text"><span className="word-enter">Выйти</span></div>
                                </button>
                            ) : (
                                <button className="Btn" onClick={() => navigate('/authorization')}>
                                    <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                                    <div className="text"><Link className="test2" to="/authorization"><div className="word-enter">Войти</div></Link></div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
