import React, { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { Row, ProgressBar } from "react-bootstrap";

export default function Progress() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosInstance("/progress").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);
  return (
    <Row>
      {categories.map((cat) => {
        // const proc = длина только с тру значение поделить на фулл длину UserWord * 100
        return (
          <ul>
            {`${cat.name}`}
            <ProgressBar now={90} label={`${90}%`} style={{width: '50%'}}/>
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
