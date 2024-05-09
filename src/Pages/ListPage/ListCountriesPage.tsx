import { useEffect, useState } from "react";
import getDataApi from "../../api/getDataApi";
import styles from "./list.module.css";
import { useNavigate } from "react-router-dom";
import { elementType, propsInterface } from "../../types/types";

export default function ListCountriesPage({ setError }: propsInterface) {
  const [listCountries, setListCountries] = useState([]);
  const navigate = useNavigate();

  const countryClick = (name: string): void => {
    navigate(`/country/${name}`);
  };

  useEffect(() => {
    setError("");
    getDataApi(setError)
      .then((data) => {
       setListCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.content__counties}>
      {listCountries
        ? listCountries.map((el: elementType, index) => {
            return (
              <div key={index} className={styles.content__countries_block}>
                <div>{index}</div>
                <div
                  onClick={() => {
                    countryClick(el.name.common);
                  }}
                  className={styles.countries__block_list}
                >
                  {el.name.common}
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
