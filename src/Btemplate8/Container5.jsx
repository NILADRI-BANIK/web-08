import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import profileImage from "../assets/business/image/profileImage.svg";
import styles from "./Btemplate8.module.scss";
import "./Btemplate8.scss";
import aboutusbg from "./assets/aboutusbg.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import GalleryCard from "./components/GalleryCard";
import MobileGallery from "./components/MobileGallery";

const posts = [
	{
		id: 0,
		mediaUrl: gallery1,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
	{
		id: 1,
		mediaUrl: gallery2,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
	{
		id: 2,
		mediaUrl: gallery3,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
	{
		id: 3,
		mediaUrl: gallery2,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
];

const items = posts.map((post) => <GalleryCard key={post.id} product={post} />);

const responsive = {
	0: { items: 3 },
};

function Container5() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width, height]);
	return (
		<div className={styles.Container5}>
			<div className={styles.backgroundImage}>
				<img src={aboutusbg} alt="" />
			</div>
			<div className={styles.topSection}>
				<h2>Our Gallery</h2>
				<h4>View All</h4>
			</div>
			<div className={styles.carouselB8} id="carouselB8">
				{width < height ? (
					<MobileGallery posts={posts} />
				) : (
					<AliceCarousel
						items={items}
						responsive={responsive}
						autoPlay
						autoPlayInterval={1000}
						animationDuration={1000}
						infinite
					/>
				)}
			</div>
			<div className={styles.thankYouDesk}>
				<p>Thank You! Visit Again</p>
			</div>
		</div>
	);
}

export default Container5;
