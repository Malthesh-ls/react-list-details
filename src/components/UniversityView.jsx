import { useState } from 'react';
import { config } from '../config/config';
import { columns } from '../config/constants';
import Table from '../components/table/Table';
import SearchBar from './SearchBar';

const UniversityView = ({
  data,
  setData,
  error,
}) => {
  const [searchData, setSearchData] = useState(data);

  const handleDelete = (universityId) => {
    setSearchData(searchData.filter(item => item.uid !== universityId))
    setData(data.filter(item => item.uid !== universityId))
  }

  return (
    <>
      {!error
        ?
        <>
          {data.length > 0 ?
            <>
              <SearchBar data={data} setSearchData={setSearchData} />
              <Table
                columns={columns}
                data={searchData}
                handleDelete={handleDelete}
              />
            </>
            : <div>No data found</div>
          }
        </>
        : <div className='errMsg alignCenter'>{config.errMsg}</div>
      }
    </>
  )
}

export default UniversityView