import React from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import styles from "./Btemplate8.module.scss";
import aboutusbg from "./assets/aboutusbg.png";

function Container2({ editable, aboutusText, setAboutusText, aboutusImage, setAboutusImage }) {
	const onContentBlur = CreateSanitizeCallback(setAboutusText);
	return (
		<div className={styles.Container2}>
			<div className={styles.backImage}>
				<img src={aboutusbg} alt="" />
			</div>

      <div className={styles.media}>
        <video src="" controls></video>
      </div>
			<div className={styles.details}>
				<h2>About Company</h2>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<ContentEditableDiv
					className={styles.aboutCompany}
					text={aboutusText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
				<button>We're Hiring</button>
			</div>
		</div>
	);
}

export default Container2;
