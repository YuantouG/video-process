/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-01-28 15:12:22
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-29 16:14:08
 */
import { Table } from "antd";
export default function DownLoadManage(props) {
  const columns = [
    {
      title: "序号",
      key: "number",
      dataIndex: "number",
    },
    {
      title: "标题",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "part",
      key: "part",
      dataIndex: "part",
    },
    {
      title: "清晰度",
      key: "qingxidu",
      dataIndex: "qingxidu",
    },
    {
      title: "大小",
      key: "size",
      dataIndex: "size",
    },
    {
      title: "下载",
      key: "load",
      dataIndex: "load",
    },
    {
      title: "时间",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "速度",
      key: "space",
      dataIndex: "space",
    },
    {
      title: "状态",
      key: "status",
      dataIndex: "status",
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      number: "123",
      title: "标题" + i,
    });
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        align="center"
        scroll={{ scrollToFirstRowOnChange: true, y: 500 }}
      />
    </div>
  );
}
