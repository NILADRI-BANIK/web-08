import React, { useEffect, useState } from "react";
import bbc from "../assets/business/image/bbc.png";
import cnbc from "../assets/business/image/cnbc.png";
import newyorkTimes from "../assets/business/image/newyorkTimes.png";
import time from "../assets/business/image/time.png";
import dialer from "../assets/business/svg/dialer.svg";
import location from "../assets/business/svg/location.svg";
import message from "../assets/business/svg/message.svg";
import store from "../assets/business/svg/store.svg";
import whatsapp from "../assets/business/svg/whatsapp.svg";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import rating from "../assets/images/rating.png";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import styles from "./Btemplate8.module.scss";
import asset from "./assets/con1Asset.png";
import assetMob from "./assets/con1AssetMob.png";
import ImageUpload from "../components/ImageUpload/ImageUpload";
function Container1({
	editable,
	landingImage,
	setLandingImage,
	businessLogo,
	setBusinessLogo,
	businessName,
	setBusinessName,
	ratingData,
	setShowRating,
}) {
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
	const onContentBlur = CreateSanitizeCallback(setBusinessName);
	return (
		<div className={styles.Container1}>
			{!editable && <ImageUpload className={styles.landingChangeIcon} setImage={setLandingImage} image={landingImage} />}
			<div className={styles.backImage}>
				<img src={landingImage} alt="" />
			</div>

			{width < height ? (
				<div className={styles.asset}>
					<img src={assetMob} alt="" />
				</div>
			) : (
				<div className={styles.asset}>
					<img src={asset} alt="" />
				</div>
			)}

			<div className={styles.logo}>
				<img src={businessLogo} alt="LOGO.png" />
			</div>
			<div className={styles.content}>
				<div className={styles.section1}>
					{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
					<ContentEditableDiv
						className={styles.businessName}
						text={businessName}
						onChange={onContentBlur}
						contentEditable={!editable}
					/>
					<div className={styles.buttons}>
						<button>Subscribe</button>
						<button>Mesage</button>
					</div>
				</div>

				<div className={styles.section2}>
					<div className={styles.leftSection}>
						<div className={styles.RatingContainer} onClick={() => setShowRating(true)}>
							<img src={rating} alt="" />
							<p>{ratingData}</p>
						</div>
						<div className={styles.socials}>
							<div className={styles.whatsapp}>
								<img src={whatsapp} alt="" />
							</div>
							<div className={styles.phone}>
								<img src={dialer} alt="" />
							</div>
							<div className={styles.mail}>
								<img src={message} alt="" />
							</div>
							<div className={styles.location}>
								<img src={location} alt="" />
							</div>
							<div className={styles.store}>
								<img src={store} alt="" />
							</div>
						</div>
					</div>
					<div className={styles.rightSection}>
						<div className={styles.subscribers}>
							<h2>{"21k"}</h2>
							<h4>Subscribers</h4>
						</div>
						<div className={styles.posts}>
							<h2>{"256"}</h2>
							<h4>Post</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.adds}>
				<marquee direction="left" behavior="scroll" scrollamount="10" className={styles.logos}>
					<img src={cnbc} alt="logo1" className={styles.cnbc} />
					<img src={bbc} alt="logo2" className={styles.bbc} />
					<img src={newyorkTimes} alt="logo3" className={styles.newyorkTimes} />
					<img src={time} alt="logo4" className={styles.time} />
				</marquee>
			</div>
		</div>
	);
}

export default Container1;
