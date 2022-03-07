import React, { useEffect } from "react";
import { Text } from "@ui-kitten/components";
import { User } from "../../API";

type InterestsProps = {
  user: User;
};

const Interests = (props:InterestsProps) => {
  const [interests, setInterests] = React.useState([]);

  useEffect(() => {
    const getInterests = async () => {

    };
  }, []);
  return (
    <Text>
      Hello
    </Text>
  );
};

export default Interests;
