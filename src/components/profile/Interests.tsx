import React, { useEffect } from "react";
import { Text } from "@ui-kitten/components";

type InterestsProps = {
  userId?: String;
};

const Interests = ({ userId }:InterestsProps) => {
  const [interests, setInterests] = React.useState([]);

  useEffect(() => {
    console.log(userId);

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
