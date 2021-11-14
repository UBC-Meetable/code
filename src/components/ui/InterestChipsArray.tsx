import * as React from "react";
import { Chip } from "react-native-paper";
import { Layout } from "@ui-kitten/components";

interface ChipsArrayProps {
  interestsList: string[];
  interestCategory: string;
}

interface Interest {
  key: number;
  label: string;
}

export default function ChipsArray({
  interestsList,
  interestCategory,
}: ChipsArrayProps) {
  const interestObjArray: Interest[] = interestsList.map((interest, index) => ({
    key: index,
    label: interest,
  }));

  const [chipData, setChipData] = React.useState<Interest[]>(interestObjArray);

  return (
    <Layout>
      {chipData.map((data) => {
        return <Chip> data.label </Chip>;
      })}
    </Layout>
  );
}
