import { Row, Form, InputNumber, Col, Switch } from "antd";

function FormPrices() {
  return (
    <Row>
      <Col span={24}>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              type: "number",
              required: true,
              message: "Maydon bo'sh",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Old Price"
          name="oldPrice"
          rules={[
            {
              type: "number",
              required: true,
              message: "Maydon bo'sh",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Discount"
          name="discount"
          rules={[
            {
              type: "number",
              message: "Maydon bo'sh",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Is offer"
          name="isOffer"
          rules={[
            {
              type: "boolean",
              required: true,
              message: "Maydon bo'sh",
            },
          ]}
        >
          <Switch checkedChildren="True" unCheckedChildren="False" />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default FormPrices;
