export const mapUniversityResponse = (data) => {
  const respData = data.map((item, index) => {
    const { name, domains, web_pages, alpha_two_code, country } = item;
    const mapItem = {
      uid: index + 1,
      name,
      domains,
      web_pages,
      alpha_two_code: alpha_two_code ? alpha_two_code : '——',
      country: country ? country : '——',
      state_province: item['state-province'] ? item['state-province'] : '——',
    }
    return mapItem;
  })
  return respData;
}