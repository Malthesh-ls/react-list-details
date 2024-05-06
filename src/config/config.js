const config = {
  title: 'React Post Articles',
  localDataKey: 'universityData',
  errMsg: 'Whoops! Something went wrong, please try after sometime'
};

const getLocalData = () => {
  const localData = localStorage.getItem(config.localDataKey);
  if (localData != undefined) {
    return JSON.parse(localData)
  }
  return null;
}

const setLocalData = (data) => {
  localStorage.removeItem(config.localDataKey);
  localStorage.setItem(config.localDataKey, JSON.stringify(data));
}

export {
  config,
  getLocalData,
  setLocalData,
};