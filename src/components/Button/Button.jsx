export default function Button(props) {
    return (
        <button
            className={props.className}
            id={props.text}
            onClick={props.func}
        >{props.text}</button>
    )
}