import { useEffect, useState } from 'react';
import { getLocalData, setLocalData } from '../config/config';
import { ReadUniversityService } from '../services/services';
import { mapUniversityResponse } from '../utils/mappers';
import UniversityView from '../components/UniversityView';

const UniversityWrapper = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(error === null);

  const onLoad = async () => {
    const { data: respData, error: apiError } = await ReadUniversityService();
    if (respData) {
      setData(mapUniversityResponse(respData));
      setLocalData(mapUniversityResponse(respData));
    } else if (apiError) {
      setData(getLocalData());
    }
    setError(apiError)
    setLoading(apiError ? !apiError : apiError);
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className='section'>
      {loading
        ? <div>Loading...</div>
        :
        <UniversityView
          data={data}
          setData={setData}
          error={error && data === null} />
      }
    </div >
  )
}

export default UniversityWrapper
