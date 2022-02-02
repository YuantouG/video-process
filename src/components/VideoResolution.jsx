import "../styles/VideoResolution.scss";
import { Form, Input, Button, Checkbox, Row, Col, Radio } from "antd";
import FileUpload from "./file-upload";
import VideoOperate from "./video-operate";
export default function VideoResolution(props) {
  return (
    <Form className="VideoResolu">
      <Row>
        <Col span={8}>
          <Form.Item label="重置MDS">
            <Checkbox></Checkbox>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="水平翻转">
            <Checkbox></Checkbox>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="视频尺寸">
            {/* onChange={onChange} value={value} */}
            <Radio.Group>
              <Radio value={1}>4:3</Radio>
              <Radio value={2}>16:9</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item label="片头">
            <FileUpload tips="选择片头"></FileUpload>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="片尾">
            <FileUpload tips="选择片尾"></FileUpload>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item label="视频">
          <VideoOperate></VideoOperate>
        </Form.Item>
      </Row>
    </Form>
  );
}
