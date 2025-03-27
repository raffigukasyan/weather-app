import toast from "react-hot-toast";
import { api } from "./base";

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
  
    if (status) {
      switch (status) {
        case 400:
          toast.error("Неверный запрос");
          break;
        case 401:
          toast.error("Вы не авторизованы");
          break;
        case 403:
          toast.error("Доступ запрещён");
          break;
        case 404:
          toast.error("Данные не найдены");
          break;
        case 500:
          toast.error("Ошибка сервера");
          break;
        default:
          toast.error("Ошибка запроса");
      }
    } else if (error.request) {
      toast.error("Нет ответа от сервера");
    } else {
      toast.error("Неизвестная ошибка");
    }
    return Promise.reject(error);
  }
);
