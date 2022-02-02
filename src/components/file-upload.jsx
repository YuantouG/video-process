import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
export default class FileUpload extends React.Component {
  render() {
    const { props } = this;
    return (
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>{props.tips}</Button>
      </Upload>
    );
  }
}
