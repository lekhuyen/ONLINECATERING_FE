import classNames from "classnames/bind";
import styles from './Account.module.scss'
import icons from "../../ultil/icons";
import { useState } from "react";

const cx = classNames.bind(styles)
const { GrPrevious, GrNext, LuMapPin, FiFlag, IoMdTime } = icons

var imagesRestaurant = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGDwi18a_zWG2TRjooztUp83c4GDB-J4fKRbYtjozVXTanfvs8dWcqJaPlwY9wAkcYtI&usqp=CAU"
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
        image: "https://c8.alamy.com/comp/2H8BEAT/dham-traditional-food-of-himachal-pradesh-himachali-kangri-dham-thali-includes-kaddu-ka-khatta-chane-ka-madra-sepu-vadi-maash-dal-rajma-salad-2H8BEAT.jpg"
    },
    {
        image: "https://c8.alamy.com/comp/2H8BEAT/dham-traditional-food-of-himachal-pradesh-himachali-kangri-dham-thali-includes-kaddu-ka-khatta-chane-ka-madra-sepu-vadi-maash-dal-rajma-salad-2H8BEAT.jpg"
    },
    {
        image: "https://c8.alamy.com/comp/2H8BEAT/dham-traditional-food-of-himachal-pradesh-himachali-kangri-dham-thali-includes-kaddu-ka-khatta-chane-ka-madra-sepu-vadi-maash-dal-rajma-salad-2H8BEAT.jpg"
    },
    {
        image: "https://www.shessmokin.com/media/gallery/gallery-img-05.jpg"
    }
]

const Account = () => {
    const [imageSrc, setImageSrc] = useState('')
    const [imageIndex, setImageIndex] = useState(0)
    const [clickImageStatus, setClickImageStatus] = useState(false)

    const mainImagesCount = imagesRestaurant.length - 6
    const hanldeChangeImage = (index) => {
        setImageSrc(imagesRestaurant[index].image)
        setImageIndex(index)
    }

    return (
        <div className={cx("account-page")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("slider")}>
                        <div className={cx("list")}>
                            {
                                imagesRestaurant.map((item, index) => (
                                    <div className={cx("item")} key={index}>
                                        <img alt="" src={clickImageStatus ? imageSrc : item.image} />
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
                                    <img alt="" src={item.image} className={cx(imageIndex === index ? "active" : "")}/>
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
                                Loai hinh: <p style={{color: "#d02028"}}>Mon Han Guoc</p>
                            </div>
                            <div>
                                <span><IoMdTime /></span>
                                Gio hoat dong: 10:00 - 20:00
                            </div>
                        </div>
                    </div>
                    <div>
                        pppppppppppppppppppppppppppp
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Account;