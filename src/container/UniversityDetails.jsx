import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const UniversityDetails = () => {
  const { universityId } = useParams();
  const {
    universityData,
  } = useGlobalContext();

  const universityDetails = universityData?.filter(item => item.uid == universityId);
  const { name, country, state_province, alpha_two_code, web_pages, domains } = universityDetails[0];
  return (
    <>
      <div className="detailsCard">
        <h3>{name}</h3>
        <div className="cardContent">
          <div>State Province : {state_province}</div>
          <div>Country : {country}</div>
          <div>Alpha Code : {alpha_two_code}</div>
          <div>Domains : {domains.toString()}</div>
          <div>Web Pages : {web_pages.toString()}</div>
        </div>
      </div>
    </>
  )
}

export default UniversityDetails