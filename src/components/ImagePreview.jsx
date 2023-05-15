import classes from "./ImagePreview.module.css";

function ImagePreview(props) {
	return <li 
		className={classes.imgPreviewContainer} 
		style={{backgroundImage: `url(${props.img})`}}
	/>
}

export default ImagePreview;
