import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Btemplate8.module.scss";
import "./Btemplate8.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import backImage from "./assets/aboutusbg.png";
import Products from "./components/Products";
import product1 from "./assets/product1.png";

const products = [
	{
		id: 1,
		mediaUrl: product1,
		productName: "Office & Casual Wear",
	},
	{
		id: 2,
		mediaUrl: product1,
		productName: "Office & Casual Wear",
	},
	{
		id: 3,
		mediaUrl: product1,
		productName: "Office & Casual Wear",
	},
	{
		id: 4,
		mediaUrl: product1,
		productName: "Office & Casual Wear",
	},
	{
		id: 5,
		mediaUrl: product1,
		productName: "Office & Casual Wear",
	},
];

function Container4() {
	const [swiper, setSwiper] = useState(null);

	const handleMouseEnter = () => {
		if (swiper) {
			swiper.autoplay.stop();
		}
	};

	const handleMouseLeave = () => {
		if (swiper) {
			swiper.autoplay.start();
		}
	};

	return (
		<div className={styles.Container4}>
			<div className={styles.backImage}>
				<img src={backImage} alt="" />
			</div>
			<div className={styles.topSection}>
				<h2>Our Product</h2>
				<div className={styles.viewAll}>
					<span>+</span>
					<p>View All</p>
				</div>
			</div>
			<div className={styles.carousel} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="BTemp8Swiper">
				<Swiper
					direction={"vertical"}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
					onSwiper={(swiper) => setSwiper(swiper)}>
					{products &&
						products.map((product, i) => (
							<SwiperSlide key={i}>
								<Products product={product} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
}

export default Container4;
