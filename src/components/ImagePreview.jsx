import { Link } from "react-router-dom";
import classes from "./ImagePreview.module.css";
import DatabaseHandler from "../database/DatabaseHandler";

function ImagePreview(props) {
	async function deleteImgHandler() {
		console.log(props.id);
		await DatabaseHandler.deleteImageFromDatabase(props.id);
	}

	return (
		<li
			className={classes.imgPreviewContainer}
			style={{ backgroundImage: `url(${props.img})` }}
		>
			<Link to="." className={classes.deleteBtn} onClick={deleteImgHandler} />
		</li>
	);
}

export default ImagePreview;
