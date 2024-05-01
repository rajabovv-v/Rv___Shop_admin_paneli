import { useEffect, useState } from 'react';
import { Card, Row, Col, Form, Input, Button, Table, Space, Switch, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useLoad, usePatchRequest, usePostRequest } from '../../hooks/request';
import { categoriesDelete, categoriesList, categoriesPatch, categoriesPost } from '../../constants/urls';
import { isUrlValid, slugify } from '../../utils/helpers';
import useDeleteModal from '../../hooks/useDeleteModal';

function Categories() {
  const [form] = Form.useForm()
  const title = Form.useWatch('title', form)
  const postRequest = usePostRequest({ url: categoriesPost })
  const patchRequest = usePatchRequest()
  const [isUpdate, setIsUpdate] = useState(null)
  const deleteModal = useDeleteModal()

  const { response: categories, loading, request: reload } = useLoad({ url: categoriesList })

  const recommendedCategories = categories?.filter(item => item.isRecommended)


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
    },
    {
      title: 'Is recommended',
      render: (item) => (
        <Switch
          checkedChildren="True"
          unCheckedChildren="False"
          defaultChecked={item.isRecommended}
          onChange={(e) => handleRecommended(e, item.id)}
          disabled={recommendedCategories.length >= 2 && !recommendedCategories.find(el => el.id === item.id)}
        />
      )
    },

    {
      title: 'Actions',
      render: (item) => (
        <Space>
          <Button icon={<EditOutlined />} disabled={isUpdate} onClick={() => handleEdit(item)} />
          <Button icon={<DeleteOutlined />} danger disabled={isUpdate} onClick={() => deleteModal(categoriesDelete(item.id), `reload`)} />
        </Space>
      )
    }
  ];

  const handleRecommended = async (e, id) => {
    const { success } = await patchRequest.request({ url: categoriesPatch(id), data: { isRecommended: e } })
    if (success) {
      reload()
    }
  }

  const handleEdit = (item) => {
    form.setFieldsValue(item)
    setIsUpdate(item.id)
  }

  const handleFinish = async (data) => {
    const { success } = isUpdate ? await patchRequest.request({ url: categoriesPatch(isUpdate), data }) : await postRequest.request({ data })
    if (success) {
      reload()
      form.resetFields()
      setIsUpdate(null)
    }
  }

  const handleCancel = () => {
    setIsUpdate(null)
    form.resetFields()
  }

  useEffect(() => {
    if (title && title.length) {
      form.setFieldValue('slug', slugify(title));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return (
    <div>
      <Card title="Categories">
        <Row gutter={[16, 16]}>
          <Col span={8} style={{ borderRight: '1px solid #f0f0f0' }}>
            <Form onFinish={handleFinish} layout='vertical' form={form} >
              <Form.Item label="Title" name='title' rules={[{
                type: 'string',
                required: true,
                message: 'Maydon bo\'sh'
              }]}>
                <Input placeholder='Smartphones' />
              </Form.Item>
              <Form.Item label="Image" name='image' rules={[{
                type: 'string',
                required: true,
                message: 'Is not URL!',
                validator: (_, value) => {
                  if (isUrlValid(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Is not URL!'))
                },
              }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Is recommended" name='isRecommended' rules={[{
                type: 'boolean',
                required: true,
                message: 'Maydon bo\'sh'
              }]}>
                <Switch checkedChildren="True" unCheckedChildren="False" />
              </Form.Item>
              <Form.Item label="Slug" name='slug'>
                <Input placeholder='smartphones' disabled value={title} />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button type='primary' htmlType='submit' loading={loading}>{isUpdate ? 'Update' : 'Create'} category</Button>
                  {isUpdate && <Button onClick={handleCancel}>Cancel</Button>}
                </Space>
              </Form.Item>
            </Form>
          </Col>
          <Col span={16}>
            <Table dataSource={categories} columns={columns} loading={loading} rowKey='id' />
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Categories