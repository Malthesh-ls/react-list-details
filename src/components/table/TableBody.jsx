
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context/context';
import { DeleteIcon } from "../common/Icon";

const TableBody = ({ tableData, columns, handleDelete }) => {
  const {
    setUniversityData,
  } = useGlobalContext();

  const navigate = useNavigate();

  const handleClick = (id) => {
    setUniversityData(tableData);
    navigate(`/university-details/${id}`);
  }
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.uid}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor]
                ? data[accessor]
                : (accessor === 'action'
                  ? <span className="deleteIcon" onClick={() => handleDelete(data.uid)}><DeleteIcon /></span>
                  : "——"
                );
              return (
                <td key={accessor}>
                  {accessor === 'name'
                    ? <span className="anchorTag" onClick={() => handleClick(data.uid)}>{tData}</span> : tData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
