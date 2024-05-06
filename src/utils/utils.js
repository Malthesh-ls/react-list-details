const getDefaultSorting = (initData, columns) => {
  const sorted = [...initData].sort((a, b) => {
    const filterColumn = columns.filter((column) => column.sortbyOrder);

    let { accessor = "id", sortbyOrder = "asc" } = Object.assign(
      {},
      ...filterColumn
    );

    if (a[accessor] === null) return 1;
    if (b[accessor] === null) return -1;
    if (a[accessor] === null && b[accessor] === null) return 0;

    const ascending = a[accessor]
      .toString()
      .localeCompare(b[accessor].toString(), "en", {
        numeric: true,
      });

    return sortbyOrder === "asc" ? ascending : -ascending;
  });
  return sorted;
}

export {
  getDefaultSorting,
}