import React, { useEffect, useState } from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Btemplate8.module.scss";
import backImg from "./assets/aboutusbg.png";
import chooseusAsset from "./assets/chooseusAsset.webp";
import chooseusAssetMob from "./assets/chooseusAssetMob.png";

function Container3({ editable, chooseusImage, setChooseusImage, chooseusText, setChooseusText }) {
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
	const onContentBlur = CreateSanitizeCallback(setChooseusText);
	return (
		<div className={styles.Container3}>
			{!editable && <ImageUpload className={styles.chooseusChangeIcon} setImage={setChooseusImage} image={chooseusImage} />}
			<div className={styles.backImage}>
				<img src={backImg} alt="" />
			</div>
			<div className={styles.chooseusImage}>
				<img src={chooseusImage} alt="" />
				{width < height ? (
					<div className={styles.asset}>
						<img src={chooseusAssetMob} alt="" />
					</div>
				) : (
					<div className={styles.asset}>
						<img src={chooseusAsset} alt="" />
					</div>
				)}
			</div>
			<div className={styles.content}>
				<h2>Why Choose Us</h2>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<ContentEditableDiv
					className={styles.chooseusText}
					text={chooseusText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
			</div>
		</div>
	);
}

export default Container3;
