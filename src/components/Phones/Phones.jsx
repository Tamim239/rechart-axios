import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { BallTriangle } from "react-loader-spinner";
export const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [triangle, setTriangle] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesData = data.data.data;
        const phonesWithFakeData = phonesData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        setTriangle(false);
      });
  }, []);
  // console.log(phones)

  return (
    <div>
      {triangle && (
        <div className="flex justify-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <h1 className="text-3xl">Phone : {phones.length}</h1>
      <BarChart width={1200} height={400} data={phones}>
        <XAxis dataKey={"name"}></XAxis>
        <Bar dataKey={"price"} stroke="green"></Bar>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};
