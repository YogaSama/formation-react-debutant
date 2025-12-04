import { useContext } from "react";
import { ViewContext } from "../contexts/ViewContext";

export default function useView() {
  return useContext(ViewContext);
}
