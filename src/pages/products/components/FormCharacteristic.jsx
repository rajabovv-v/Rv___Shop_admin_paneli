import { Row, Form, Select, Col, Input, Button, Space } from "antd";
import { isUrlValid } from "../../../utils/helpers";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

function FormCharacteristic(props) {
    const { form } = props;
    return (
        <Row>
            <Col span={24}>
                <Form.List name="attributes">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field) => (
                                <Form.Item key={field.key}
                                label="Characteristic"
                                >
                             <Space style={{alignItems: 'flex-start'}}>
                             <Form.Item                      
                                        {...field}
                                        name={[field.name, 'title']}
                                        validateTrigger={["onChange", "onBlur"]}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message:'Please add title'
                                            },
                                        ]}
                                        
                                    >
                                        <Input
                                            placeholder="Type title of characteristic"
                                            style={{ width: "90%", marginRight: 10 }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'value']}
                                        validateTrigger={["onChange", "onBlur"]}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message:'Please add value'
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="Type value of characteristic"
                                            style={{ width: "90%", marginRight: 10 }}
                                        />
                                    </Form.Item>


                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => remove(field.name)}
                                    />
                             </Space>
                                   
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: "60%" }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Col>
        </Row>
    );
}


export default FormCharacteristic