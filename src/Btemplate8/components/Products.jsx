import React from 'react';
import styles from "../Btemplate8.module.scss";
import comment from "../../assets/business/image/comment.svg";
import heart from "../../assets/business/image/heartLike.svg";
import share from "../../assets/business/image/share.svg";

function Products({product}) {
  return (
		<div className={styles.productContainer}>
			<div className={styles.productImage}>
				<img src={product.mediaUrl} alt="" />
				<div className={styles.details}>
					<div className={styles.productName}>{product.productName}</div>
					<div className={styles.actions}>
						<div className={styles.like}>
							<img src={heart} alt="" />
						</div>
						<div className={styles.comment}>
							<img src={comment} alt="" />
						</div>
						<div className={styles.share}>
							<img src={share} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;