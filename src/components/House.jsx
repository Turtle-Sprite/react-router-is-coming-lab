import { useParams, Link } from "react-router-dom";

function House (props) {
    let { houseId } = useParams()
    console.log(houseId)
    const houseMembers = props.info.find( house => house.name == houseId)
    console.log(houseMembers)
    let membersNames = houseMembers.people.map((member, idx) => {
        return (
            <Link to={`members/${member.name}`}>
                <li key={`member{idx}`}>{member.name}</li>
            </Link>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                A list of members
                {membersNames}
            </ul>
        </div>
    )
}

export default House;