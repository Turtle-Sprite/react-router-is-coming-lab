

function Houses(props) {

return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            A list of houses
            {props.housesArray}
        </ul>
    </div>
)
}

export default Houses;