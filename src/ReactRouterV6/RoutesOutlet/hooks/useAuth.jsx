import { useContext } from "react";
import { AuthContex } from "../hoc/AuthProvider";

export const useAuth = () => useContext(AuthContex);
