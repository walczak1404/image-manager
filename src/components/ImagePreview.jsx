import { Link, useNavigate } from "react-router-dom";
import classes from "./ImagePreview.module.css";
import DatabaseHandler from "../database/DatabaseHandler";

function ImagePreview(props) {
	const navigate = useNavigate();

	async function deleteImgHandler() {
		console.log(props.id);
		await DatabaseHandler.deleteImageFromDatabase(props.id);
		navigate(".");
	}

	return (
		<li
			className={classes.imgPreviewContainer}
			style={{ backgroundImage: `url(${props.img})` }}
		>
			<Link to={`${props.id}`} className={classes.outerLink}>
				<div className={classes.deleteBtn} onClick={deleteImgHandler} />
			</Link>
		</li>
	);
}

export default ImagePreview;
