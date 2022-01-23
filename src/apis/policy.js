import axios from "axios";
import { GET_POLICIES } from "./routes";

export const getPoliciesAPI = async (by, id) => {
  const response = await axios.get(GET_POLICIES, {
    params: {
      search_by: by,
      id: parseInt(id),
    },
  });
  console.log(response.data);
  return response.data;
};

export const patchPolicyAPI = async (newData) => {
  const response = await axios.put(GET_POLICIES, newData
);

  return response.data;
};
