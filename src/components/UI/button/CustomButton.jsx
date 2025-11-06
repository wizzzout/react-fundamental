import classes from './CustomButton.module.css'

export default function CustomButton(props) {
	return <button className={classes.CustomButton}>{props.children}</button>
}
