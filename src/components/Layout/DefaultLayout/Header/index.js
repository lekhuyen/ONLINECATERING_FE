import classNames from "classnames/bind";
import styles from './Header.module.scss'
import icons from "../../../../ultil/icons";
import { Link, useNavigate, } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles)

const { FaUserCircle } = icons
const Header = () => {
    const navigate = useNavigate()

    const [showLoginBtn, setShowLoginBtn] = useState(false)
    const handleClickLogin = () => {
        navigate("/login")
    }
    const handleClickRegister = () => {
        navigate("/login")
    }
    const handleOnclickAccount = () => {
        navigate("/account")
    }
    return (
        <nav>
            <div className={cx("wapper")}>
                <div className={cx("header")}>
                    <div className={cx("wapper-header")}>
                        <div className={cx("header-menu")}>
                            <ul className={cx("header-category")}>
                                <Link to={"/"}>
                                    <img className={cx("logo")} alt="logo" src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png" />
                                </Link>
                                <Link to={"/"}>Home</Link>
                                <Link to={"/news"}>News</Link>
                                <Link to={"/about"}>About</Link>
                                <Link to={"/contact-us"}>Contact</Link>
                            </ul>
                        </div>
                        <div
                            className={cx("header-account")}
                            onMouseOver={() => setShowLoginBtn(true)}
                            onMouseLeave={() => setShowLoginBtn(false)}
                        >
                            <div className={cx("account-user")}>
                                <div className={cx("user-icon")}>
                                    <div><FaUserCircle /></div>
                                </div>
                                <span>
                                    Account
                                </span>
                            </div>
                            {
                                showLoginBtn &&
                                <div className={cx("btn-login")}>
                                    <div>
                                        <span
                                            onClick={handleClickLogin}
                                        >Login</span>
                                    </div>
                                    <div>
                                        <span
                                            onClick={handleClickRegister}
                                        >Register</span>
                                    </div>

                                    {/* sau khi login */}
                                    <span
                                        onClick={handleOnclickAccount}
                                        className={cx("acount-info")}>
                                        <span>Account</span>
                                    </span>
                                    <div>
                                        <span
                                            onClick={handleClickRegister}
                                        >Logout</span>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;