import { Layout, useTheme } from "@ui-kitten/components";
import React from "react";
import { FileAttachment } from "../../API";
import FilePreview from "./FilePreview";

type FilePreviewProps = {
  files: FileAttachment[];
  setFiles: React.Dispatch<React.SetStateAction<FileAttachment[]>>;
};

const PreviewWrapper = ({ files, setFiles }:FilePreviewProps) => {
  const theme = useTheme();

  const remove = (toDel: FileAttachment) => {
    const filtered = files.filter((file) => file.fileURI !== toDel.fileURI);
    setFiles(filtered);
  };

  return (
    <Layout style={{
      backgroundColor: theme["color-primary-200"], borderTopLeftRadius: 5, borderTopRightRadius: 5, flexDirection: "row",
    }}
    >
      {files.map((file, index) => {
        return (
          <FilePreview key={index} remove={remove} file={file} />
        );
      })}
    </Layout>
  );
};

export default PreviewWrapper;
