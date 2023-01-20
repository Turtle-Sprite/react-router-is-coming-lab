import { useParams } from "react-router-dom";


function Member(props) {
    let { houseId } = useParams()
    let { membersId } = useParams()
    console.log(houseId)

    const houseMembers = props.info.find( house => house.name == houseId)
    let membersInfo = houseMembers.people.map((member, idx) => {
        return member
    })
    const memberInfo = membersInfo.find( member => member.name == membersId)
    console.log(memberInfo)
    return (
        <div className="page">
            <div className="header">
                <h2>Specific Member Name</h2>
            </div>
            <div className="desc">
                <p>{memberInfo.name}</p>
                <p>{memberInfo.description}</p>
            </div>
        </div>
    )
}

export default Member;