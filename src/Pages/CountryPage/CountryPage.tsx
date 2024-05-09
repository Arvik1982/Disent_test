import { useEffect, useState } from "react";
import styles from "./country.module.css";
import { useNavigate, useParams } from "react-router-dom";
import getCountryInfoApi from "../../api/getCountryInfoApi";
import { elementType, propsInterface } from "../../types/types";

export default function CountryPage({ setError }: propsInterface) {
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  const params = useParams();
  
  useEffect(() => {
    setError("");
    if (params.id) {
      getCountryInfoApi(params.id, setError)
        .then((data) => {
          data.length !== 0 ? setCountry(data) : "";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className={styles.content__country}>
      <button onClick={() => navigate("/")}>Назад</button>

      {country.length !== 0
        ? country.map((el: elementType, index) => {
            return (
              <div key={index} className={styles.content__county_list}>
                <h1 className={styles.content__county_name}>
                  {el.name.common}
                </h1>
                <div>
                  <span className={styles.list__text}>Столица:</span>
                  <span className={styles.content__county_capital}>
                    {" "}
                    {el.capital}
                  </span>
                </div>
                <span className={styles.list__text}>Флаг страны:</span>
                <div className={styles.content__county_flag}>
                  <img src={el.flags.png} alt={el.flags.alt} />
                </div>
                <div>
                  <span className={styles.list__text}>Регион:</span>
                  <span className={styles.content__county_region}>
                    {" "}
                    {el.region}
                  </span>
                  <span className={styles.content__county_region}>
                    {" "}
                    - {el?.subregion}
                  </span>
                </div>
                <div>
                  <span className={styles.list__text}>Население:</span>
                  <span className={styles.content__county_population}>
                    {" "}
                    {el.population}
                  </span>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
