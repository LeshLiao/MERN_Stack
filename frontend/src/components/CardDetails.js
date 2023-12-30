const CardDetails = ({ d }) => {
    return (
        <tr key={d._id}>
            <td>{d.createdAt}</td>
            <td>{d.card_id}</td>
            <td>{d.card_data}</td>
        </tr>
    );
};
export default CardDetails