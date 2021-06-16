import GroupGoal from "../../components/GroupGoal";
import GroupActivities from "../../components/GroupActivities";
import GroupProgress from "../../components/GroupProgress";

import { useAuthy } from "../../Providers/Authy";
import { Redirect } from "react-router";

const SpecificGroup = () => {
  const { token, handleLogout } = useAuthy();

  if (token) {
    return (
      <>
        <GroupGoal />
        <GroupActivities />
        <GroupProgress />
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
export default SpecificGroup;
