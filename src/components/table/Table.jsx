import TableBody from "./TableBody";
import TableHead from "./TableHead";
//import { useSortableTable } from "../../hooks/useSortableTable";

const Table = ({ data, columns, handleDelete }) => {

  // TODO fixing sorting with search bar (both search and sort are not working at a time)
  //const [tableData, handleSorting] = useSortableTable(data, columns);
  const handleSorting = () => { }
  const tableData = data;
  return (
    <>
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData, handleDelete }} />
      </table>
    </>
  );
};

export default Table;
