import "./Show.css"

export default function Show(props) {
    if (props.display === "input"){
        return (
            <div className={props.className}>
                <p>{props.input}</p>
            </div>
        )
    }
    return (
        <div className={props.className}>
            <p>{isNaN(props.input) ? "NaN" : props.input}</p>
        </div>
    )
}