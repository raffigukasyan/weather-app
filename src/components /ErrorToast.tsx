import { useEffect } from "react";
import toast from "react-hot-toast";

export const ErrorToast = ({ error }: { error: unknown }) => {
  useEffect(() => {
    const message =
      error instanceof Error
        ? error.message
        : "Произошла ошибка при загрузке данных";
    toast.error(message);
  }, [error]);

  return null;
};
