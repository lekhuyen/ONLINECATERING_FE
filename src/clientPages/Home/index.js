
import icons from "../../ultil/icons";
import clsx from 'clsx';
import styles from './Home.module.scss'
import classNames from "classnames/bind";
import { useState } from "react";
import Slider from "../../components/Layout/Slider";
const cx = classNames.bind(styles)


const { GoFilter } = icons

const Home = () => {
    const [active, setActive] = useState(1)

    var slideImages = [
        {
            image: "https://imageio.forbes.com/specials-images/imageserve/5d8d70aa53e9710008d8f11b/A-Chinese-style-spread-at-Mao-Chow-in-London/960x0.jpg?height=474&width=711&fit=bounds",
            restauranName: "Nhà hàng ăn k cho uống",
            address: "123 truong chinh, p12,Q.Tan Binh",
            discount: "Discount 10%"
        },
        {
            image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_683,w_1024,x_0,y_0/c_limit,w_1080/v1446481966/oporto_interior_twmjsf.jpg",
            restauranName: "Nhà hàng ăn k cho uống",
            address: "123 truong chinh, p12,Q.Tan Binh",
            discount: "Discount 10%"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0634/2810/0335/files/Article_2021_20Pic_203-1.png",
            restauranName: "Nhà hàng toan bánh mì",
            address: "124 truong chinh, p12,Q.Tan Binh",
            discount: "Discount 20%"
        },
        {
            image: "https://axwwgrkdco.cloudimg.io/v7/lefooding.com/medias/2024/04/Aperol-x-Fooding-%C2%A9-Maurine-Toussaint.jpg?width=800&optipress=3",
            restauranName: "Nhà hàng Buffet toàn rau",
            address: "125 truong chinh, p12,Q.Tan Binh",
            discount: "Discount 30%"
        },
        {
            image: "https://transform-cf1.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288820281/rm3-580.webp/w_1200,c_limit/",
            restauranName: "Nhà hàng toàn hết đồ ăn",
            address: "124 truong chinh, p12,Q.Tan Binh",
            discount: "Discount 40%"
        }
    ]

    let lengthItems = slideImages.length - 1;
    // console.log(active);
    const handleOnClickNext = () => {
        if (active + 1 > lengthItems) {
            setActive(0)
        } else {
            setActive(prev => (prev + 1))
        }

    }
    const handleOnClickPrev = () => {
        if (active - 1 < 0) {
            setActive(lengthItems)
        } else {
            setActive(prev => (prev - 1))
        }
    }
    const handleOnclickDot = (index) => {
        setActive(index)
    }
    // useEffect(() => {
    //     timeId.current = setInterval(() =>{
    //         handleOnClickNext()
    //     }, 500)
    //     return () => clearInterval(timeId)

    // },[])

    return (
        <div className={clsx(styles.home)}>
            <div className={cx("wapper")}>

                {/* slider */}
                <Slider
                    dotStatus
                    discountStatus
                    handleOnclickDot={handleOnclickDot}
                    handleOnClickPrev={handleOnClickPrev}
                    slideImages={slideImages}
                    active={active}
                    handleOnClickNext={handleOnClickNext}
                />

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
                            <div className="icon"><GoFilter /></div>
                            <span className="text">Filter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;