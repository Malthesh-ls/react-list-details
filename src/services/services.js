import { Constants } from "../config/constants";

const useAPI = async (url, params) => {
  let apiConfig = {};
  if (params === undefined || params === null) {
    apiConfig = {
      method: 'GET'
    }
  } else {
    apiConfig = {
      method: 'POST',
      body: JSON.stringify(params),
    }
  }
  try {
    const resp = await fetch(url, apiConfig);
    if (!resp.ok) {
      return {
        data: null,
        error: true
      };
    }
    const data = await resp.json();
    return {
      data,
      error: false
    };
  } catch (e) {
    return {
      data: null,
      error: true,
    };
  }
}

export const ReadUniversityService = async () => {
  return useAPI(`${Constants.API_HOST}/search?country=United%20Arab%20Emirates`);
}