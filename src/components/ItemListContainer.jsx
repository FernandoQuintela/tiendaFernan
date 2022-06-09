export default function ItemListContainer(props) {
    console.log(props);
    return (
        <div className="contenedor-items">
            <p>{props.greeting}</p>
        </div>
    )
}