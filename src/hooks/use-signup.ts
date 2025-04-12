import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../apis/endpoints";

const useSignUp = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async ({ phone, name }: { phone: string; name: string }) => {
      const res = await axios.post(
        endpoints.signUp,
        { phone, name },
        { headers: { "Content-Type": "application/json" } }
      );

      return res?.data;
    },
    onError: (err: any) => {
      if (err?.response) {
        console.log("Error response:", err?.response.data);
        console.log("Error status:", err.response.status);
        alert(`Error: ${err.response.data.message || "Something went wrong"}`);
      } else if (err.request) {
        console.log("No response received:", err.request);
        alert("No response from server. Please try again.");
      } else {
        console.log("Error message:", err.message);
      }
      throw err;
    },
  });

  return {
    signUp: mutate,
    ...rest,
  };
};

export default useSignUp;
