import classes from './CustomInput.module.css'

export default function CustomInput(props) {
	return <input {...props} className={classes.CustomInput} />
}
