import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../table/table";

const TableData = ({ country, seachData }) => {
  const [dataList, setDataList] = useState([]);
  const [dataList1, setDataList1] = useState([]);

  const getCountryData = async (id) => {
    try {
      let data = await axios.get(
        "http://universities.hipolabs.com/search?country=" + `${id}`
      );
      console.log(`data`, data.data);

      setDataList(data.data);
      setDataList1(data.data);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getCountryData(country);
  }, [country]);

  useEffect(() => {
    let newData = dataList.filter((ele) => {
      //   ele.name.indexOf(seachData);
      return ele.name.toLowerCase().includes(seachData.toLowerCase());
    });
    setDataList1(newData);
  }, [seachData]);

  return (
    <div>
      <h1>Table Data</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>State</th>
          <th>Lonk</th>
        </thead>
        <tbody>
          {dataList1?.map((ele) => {
            return (
              <Table
                name={ele.name}
                state={ele["state-province"]}
                link={ele["web_pages"][0]}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
