import classNames from "classnames/bind";
import styles from './Account.module.scss'
import icons from "../../ultil/icons";
import { useState } from "react";
import Slider from "../../components/Layout/Slider";

const cx = classNames.bind(styles)
const { LuMapPin, FiFlag, IoMdTime, FaRegStar, FaRegUser,MdOutlineChildCare, MdAccessTime  } = icons

var imagesRestaurant = [
    {
        image: "https://heremag-prod-app-deps-s3heremagassets-bfie27mzpk03.s3.amazonaws.com/wp-content/uploads/2019/11/12180349/paris-france-le-bar-des-pres-1-560x373.jpg"
    },
    {
        image: "https://www.arshinagar.org/images/foodImg.jpg"
    },
    {
        image: "https://www.shessmokin.com/media/gallery/gallery-img-03.jpg"
    },
    {
        image: "https://c8.alamy.com/comp/2H8BEAT/dham-traditional-food-of-himachal-pradesh-himachali-kangri-dham-thali-includes-kaddu-ka-khatta-chane-ka-madra-sepu-vadi-maash-dal-rajma-salad-2H8BEAT.jpg"
    },
    {
        image: "https://axwwgrkdco.cloudimg.io/v7/lefooding.com/medias/2021/07/10_54_37_175_restaurant_le_pantruche_paris.jpg?width=800&optipress=3"
    },
    {
        image: "https://c8.alamy.com/comp/2H8BEAT/dham-traditional-food-of-himachal-pradesh-himachali-kangri-dham-thali-includes-kaddu-ka-khatta-chane-ka-madra-sepu-vadi-maash-dal-rajma-salad-2H8BEAT.jpg"
    },
    {
        image: "https://m.theweekendedition.com.au/wp-content/uploads/2022/10/TWE-Mr-Badgers-06-1100x550-c-center-616x338-c-center.png"
    },
    {
        image: "https://www.shessmokin.com/media/gallery/gallery-img-05.jpg"
    }
]

const Account = () => {
    const [active, setActive] = useState(1)
    const [imageSrc, setImageSrc] = useState('')
    const [imageIndex, setImageIndex] = useState(0)
    const [clickImageStatus, setClickImageStatus] = useState(false)

    const mainImagesCount = imagesRestaurant.length - 6
    const hanldeChangeImage = (index) => {
        setImageSrc(imagesRestaurant[index].image)
        setImageIndex(index)
        setActive(index)
    }
    let lengthItems = imagesRestaurant.length - 1;

    const handleOnClickNext = () => {
        if (active + 1 > lengthItems) {
            setActive(0)
        } else {
            setActive(prev => (prev + 1))
        }
        setClickImageStatus(false)
        // console.log(active);

    }
    const handleOnClickPrev = () => {
        if (active - 1 < 0) {
            setActive(lengthItems)
        } else {
            setActive(prev => (prev - 1))
        }
        setClickImageStatus(false)
    }
    const handleOnclickDot = (index) => {
        setActive(index)
    }

    return (
        <div className={cx("account-page")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("slider")}>
                        <Slider
                            handleOnclickDot={handleOnclickDot}
                            handleOnClickPrev={handleOnClickPrev}
                            slideImages={imagesRestaurant}
                            active={active}
                            handleOnClickNext={handleOnClickNext}
                            imageSrc={imageSrc}
                            clickImageStatus={clickImageStatus}
                        />
                    </div>
                    <div className={cx("images-list")}>
                        {
                            imagesRestaurant.slice(0, 5).map((item, index) => (
                                <div
                                    onClick={() => {
                                        hanldeChangeImage(index)
                                        setClickImageStatus(true)
                                    }}
                                    key={index}
                                    className={cx("image")}>
                                    <img alt="" src={item.image} className={cx(imageIndex === index ? "active" : "")} />
                                </div>
                            ))
                        }
                        {
                            mainImagesCount > 0 &&
                            <div className={cx("image", "see-all-image")}>
                                <img alt="" src={imagesRestaurant[6].image} />
                                <div className={cx("all-images")}>
                                    <p>+{mainImagesCount}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={cx("container-res-info")}>
                    <div>
                        <div className={cx("restaurant-info")}>
                            <h2>
                                Tiệm bánh ăn không ngon
                            </h2>
                            <div>
                                <span><LuMapPin /></span>
                                123 truong chinh, p12, Q.Tan Binh
                            </div>
                            <div>
                                <span><FiFlag /></span>
                                Loai hinh: <p style={{ color: "#d02028" }}>Mon Han Guoc</p>
                            </div>
                            <div>
                                <span><IoMdTime /></span>
                                Gio hoat dong: 10:00 - 20:00
                            </div>
                            <div className={cx("vote")}>
                                Danh gia:
                                <div>
                                    <span><FaRegStar /></span>
                                    <span><FaRegStar /></span>
                                    <span><FaRegStar /></span>
                                    <span><FaRegStar /></span>
                                    <span><FaRegStar /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("order-form")}>
                        <h2>Dat cho giu ban</h2>
                        <div className={cx("form")}>
                            <div className={cx("older")}>
                                <p><FaRegUser /><span>Nguoi lon</span></p>
                                <select className={cx("form-select")}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className={cx("time-order")}>
                                <p><MdOutlineChildCare /><span>Tre em</span></p>
                                <select className={cx("form-select")}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx("form")}>
                            <div className={cx("time")}>
                                <div>
                                    <p><MdAccessTime />
                                        <span>Thoi gian den</span>
                                    </p>
                                </div>
                                <input type="date" />
                            </div>
                            <div className={cx("time")}>
                                <p></p>
                                <input type="time" />
                            </div>
                        </div>
                        <button className={cx("order-now")}>Dat cho ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;