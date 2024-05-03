import React, { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { Row, ProgressBar } from "react-bootstrap";

export default function Progress() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosInstance("/progress").then((res) => {
      // const proc = res.data.map((el) => el.Words.map((la) => la.UserWords));
      // const len = proc.map((kk) => kk.length);
      // const lenTr = proc.map((kk) => {})
      // console.log(lenTr)
      // console.log(proc);
      // console.log(res.data);
      setCategories(res.data);
    });
  }, []);
  return (
    <Row>
      {categories.map((cat) => {
        const proc = cat.Words.map((el) => el.UserWords);
        const len = proc.map((kk) => kk.length);

        const rez = len.filter((el) => el > 0)
        const rezZ = (rez.length / len.length) * 100
        return (
          <ul>
            {`${cat.name}`}
            <ProgressBar now={rezZ} label={`${rezZ}%`} style={{ width: "50%" }} />
          </ul>
        );
      })}
    </Row>
  );
}

// на ручке progress запрос в бд Categories.findAll, include -> Word -> UserWord
// получаем структуру [{Words: [{UserWords: ...}]}]
// внутри мапа на 15й строке нужно получить длину массива UserWords для текущей категории и вычислить процент
// в ProgressBar в "now" передаем процент
