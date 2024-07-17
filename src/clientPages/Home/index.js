
import icons from "../../ultil/icons";
import { useEffect, useState } from "react";



import styles from './Home.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles)


const { GrPrevious, GrNext, GoFilter } = icons

const Home = () => {
    // const [active, setActive] = useState(0)

    // const list = document.querySelector(".list")
    // const dots = document.querySelectorAll(".dots li")
    // const prev = document.querySelector(".prev")
    // const next = document.querySelector(".next")
    // useEffect(() => {
    //     const items = document.querySelectorAll(`.${cx('item')}`);
    //     console.log(items);

    // }, [])

    var slideImages = [
        {
            image: "https://imageio.forbes.com/specials-images/imageserve/5d8d70aa53e9710008d8f11b/A-Chinese-style-spread-at-Mao-Chow-in-London/960x0.jpg?height=474&width=711&fit=bounds"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfkdZ8OFyxRjN9e7sySgJSpnJsxnQD-EKx7fr8Hml_cz1eoYWTNQZrbDcqE-u_ifhla8&usqp=CAU"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ShestHMQF7kmOT1wyfKBI-O3OMxxLHpKHO_x90QepZ-Tkmt-Wmt1kfipyUR_aG1aiIc&usqp=CAU"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ShestHMQF7kmOT1wyfKBI-O3OMxxLHpKHO_x90QepZ-Tkmt-Wmt1kfipyUR_aG1aiIc&usqp=CAU"
        }
    ]


    // const handleOnClickNext = () => {
    //     setActive(prev => (prev + 1))
    //     reloadSlider()

    // }
    // const reloadSlider = () => {
    //     let checkLeft = slideImages[active]
    //     console.log(checkLeft);
    //     // list.style.left = -checkLeft + 'px'
    // }

    return (
        <div className={cx("home")}>
            <div className={cx("wapper")}>
                <div className={cx("slider")}>
                    <div className={cx("list")}>
                        {
                            slideImages.map((item, index) => (
                                <div className={cx("item")} key={index}>
                                    <img alt="" src={item.image} />
                                    <div className={cx("content")}>
                                        <p className={cx("restaurant-name")}>Restaurant Name</p>
                                        <p className={cx("restaurant-address")}>123 truong chinh, p12,Q.Tan Binh</p>
                                        <div className={cx("discount")}>
                                            <p>Discount 10%</p>
                                        </div>
                                        <div className={cx("btn-order")}>
                                            <p className={cx("order")}>Order now</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx("btn")}>
                        <button className={cx("prev")}>
                            <GrPrevious />
                        </button>
                        <button
                            // onClick={handleOnClickNext}
                            className={cx("next")}>
                            <GrNext />
                        </button>
                    </div>
                    <ul className={cx("dots")}>
                        <li className={cx("active")}></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={cx("container-filter")}>
                    <div className={cx("filter")}>
                        <select className={cx("form-select")}>
                            <option>Khu vuc</option>
                            <option>Quan 1</option>
                            <option>Quan 2</option>
                            <option>Quan 3</option>
                        </select>
                    </div>
                    <div className={cx("filter")}>
                        <select className={cx("form-select")}>
                            <option>Category</option>
                            <option>Lau</option>
                            <option>Nuong</option>
                            <option>Buffet</option>
                        </select>
                    </div>
                    <div className={cx("filter")}>
                        <select className={cx("form-select")}>
                            <option>Price</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className={cx("filter")}>
                        <button className={cx("btn-filter")}>
                            <div><GoFilter /></div>
                            <p>Fillter</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;