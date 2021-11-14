import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

interface ChipsArrayProps {
  interestsList: string[];
  interestCategory: string;
}

interface Interest {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

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
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip label={data.label} />
          </ListItem>
        );
      })}
    </Paper>
  );
}
