import { useEffect, useState } from "react";
import api from "../../services";

const GroupProgress = () => {
  const groupId = useState(
    JSON.parse(localStorage.getItem("@gestao:groupId") || "")
  );
  const [progress, setProgress] = useState("");

  return <div>Progress</div>;
};

export default GroupProgress;
