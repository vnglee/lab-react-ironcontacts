const ContactCard = ({ name, onDelete }) => {

    return (
        <tr>
            <td><img src={name.pictureUrl} /></td>
            <td>{name.name}</td>
            <td>{name.popularity}</td>
            <td>{name.wonOscar ? <p>🏆</p> : <p></p>}</td>
            <td>{name.wonEmmy ? <p>🏆</p> : <p></p>}</td>
            <td>
                <button onClick={() => onDelete(name.id)}>Delete </button>
            </td>
        </tr>
    )
}

export default ContactCard;
