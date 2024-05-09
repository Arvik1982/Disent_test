import { Dispatch } from "react";

export default async function getDataApi(setError: Dispatch<string>) {
  try {
    const responseData = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    if (!responseData.ok) {
      setError("server error");
      throw new Error("server error");
    }
    const listCounties = await responseData.json();

    return listCounties;
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
      throw new Error(error.message);
    } else {
      setError("new server error");
      throw new Error("new server error");
    }
  }
}
