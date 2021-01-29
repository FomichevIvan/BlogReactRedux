import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { addBlogAC } from "../redux/actionCreators";

const useFetch = (url) => {
  const dispatch = useDispatch()
  // принимает урл
  const [data, setData] = useState(null); // здесь будет состояние, которое получим после запроса
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          // проверяем статус запроса. если он выполнен, то обрабатываем джейсон
          return res.json();
        }
        throw Error("Something wrong(("); // иначе выбрасываем ошибку
      })

      .then((data) => {
        if (Array.isArray(data)) {
          return data.splice(data.length - 10);
        }
        return data;
      }) // здесь мы укорачиваем массив полученных блогов или передаем дальше, если это не массив, а один блог
      .then((data) => {
        dispatch(addBlogAC(data))
        setData(data); // записываем полученные блоги
        setIsPending(false); // меняем статус, чтобы исчез значок загрузки
        setErr(null); // зобновляем остояние ошибки


      })
      .catch((err) => {
        // если не все ок
        setErr(err.message); // записываем что именно не так
        setIsPending(false); // меняем статус, чтобы исчез значок загрузки
      });
  }, [url]);

  return { data, isPending, err }; // возвращаем данные из хука
};

export default useFetch; // экспортируем
