

const TableRows = (props) => {
  return (
    
      <tr className="text-white">
        <td className="py-2 px-4 border-b">{props.names}</td>
        <td className="py-2 px-4 border-b">{props.date}</td>
        <td className="py-2 px-4 border-b">{props.amount}</td>
        <td className="py-2 px-4 border-b">Bitcoin</td>
      </tr>
  
  );
};

export default TableRows;
