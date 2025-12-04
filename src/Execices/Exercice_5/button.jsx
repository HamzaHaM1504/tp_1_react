export default function btn(props) {
    return(
        <>
            <button onClick={props.click}>{props.name}</button>
        </>
    )
}