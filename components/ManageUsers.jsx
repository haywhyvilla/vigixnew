import {
  Button,
  Input,
  Select,
  Space,
  Checkbox,
  Table,
  Modal,
  Form,
  Radio,
  DatePicker,
} from 'antd';
import React, { useState } from 'react';
import ExportZone from './ExportZone';
import { SearchIcon, FilterIcon, DirLeft, DirRight } from '../utility/svg';
import Link from 'next/link';

export default function ManageUsers() {
  const { Search } = Input;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState('all');

  const onSearch = value => console.log(value);
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onChangeCheck = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const columns = [
    {
      title: ' ',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: text => (
        <div>
          <Checkbox onChange={onChange} />
        </div>
      ),
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: text => <span className="last-name">{text}</span>,
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Mobile',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Date registered',
      dataIndex: 'dateRegistered',
      key: 'dateRegistered',
    },
    {
      title: 'Total Reports',
      dataIndex: 'report',
      key: 'report',
      render: text => <span className="report">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        <div>
          <span className={`user-status ${text}`}>{text}</span>
        </div>
      ),
    },
    {
      title: ' ',
      dataIndex: 'views',
      key: 'views',
    },
  ];

  const data = [
    {
      key: '1',
      fullName: 'Atanda Damilare',
      username: 'dammy',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Sept 17, 2022',
      report: 45,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Link href={'/user-details'} passHref>
            <Button className="view-profile">View profile</Button>
          </Link>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '2',
      fullName: 'Jide Ola',
      username: 'Ola',
      email: 'jideola@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Jun 12, 2020',
      report: 2,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '3',
      fullName: 'Specter Omo',
      username: 'Specter Damilare',
      email: 'Specter@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'May 8, 2021',
      report: 10,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '4',
      fullName: 'Jesse Finn',
      username: 'Finn',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Aug 16, 2020',
      report: 22,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '5',
      fullName: 'Atanda Damilare',
      username: 'Ola',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Sept 17, 2022',
      report: 45,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '6',
      fullName: 'Jide Ola',
      username: 'Damilare',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: 'Jun 12, 2020',
      report: 2,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '7',
      fullName: 'Henry Etta',
      username: 'Omo',
      email: 'atandadray@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 10,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '8',
      fullName: 'Jesse Finn',
      username: 'Ola',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 22,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '9',
      fullName: 'Specter Omo',
      username: 'Finn',
      email: 'jessefinn@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 42,
      status: 'Active',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
    {
      key: '10',
      fullName: 'Atanda Damilare',
      username: 'Etta',
      email: 'henryetta@gmail.com',
      phone: '+2348123456790',
      dateRegistered: '12345678901234567890',
      report: 2,
      status: 'Inactive',
      views: (
        <div className="view-btn">
          <Button className="view-profile">View profile</Button>
          <Button className="view-report">View reports</Button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <ExportZone h4="All Users" />
      <div className="container search-filter">
        <div className="row justify-content-between gap-3">
          <div className="col-md-auto d-flex flex-wrap gap-3 me-lg-5">
            <div className="the-search">
              <Search
                prefix={SearchIcon}
                placeholder="Search by name..."
                onSearch={onSearch}
                className="searching"
              />
            </div>
            <div className="filter-btn-wrapper">
              <Button icon={FilterIcon} onClick={() => setModalOpen(true)}>
                Filter by:
              </Button>
            </div>
          </div>
          <div className="col-md-auto d-flex justify-content-end gap-lg-5 gap-4">
            <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
              <p className="det">
                Page <span className="our-color">2</span> of{' '}
                <span className="our-color">1000</span>
              </p>
              <div className="dir">
                <a href="">
                  <span className="">{DirLeft}</span>
                </a>
                <a href="">
                  <span className="">{DirRight}</span>
                </a>
              </div>
            </div>
            <div>
              <Space wrap>
                <Select
                  defaultValue="10 per page'"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: '10',
                      label: '10 per page',
                    },
                    {
                      value: '100',
                      label: '100 per page',
                    },
                    {
                      value: '1000',
                      label: '1000 per page',
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="select-all">
            {/* <Checkbox onChange={onChange}>Select All</Checkbox> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="table-wrapper ">
          <Table columns={columns} dataSource={data} />
          <div className="our-pagination d-flex justify-content-center">
            <div className="d-flex gap-lg-4 gap-3 align-items-center flex-wrap">
              <p className="det">
                Page <span className="our-color">2</span> of{' '}
                <span className="our-color">1000</span>
              </p>
              <div className="dir">
                <a href="">
                  <span className="">{DirLeft}</span>
                </a>
                <a href="">
                  <span className="">{DirRight}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Filter by:"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="our-modal"
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="status" label="Status:">
            <Radio.Group onChange={onChangeCheck} value={value}>
              <Radio value={'all'}>All</Radio>
              <Radio value={'active'}>Active</Radio>
              <Radio value={'inactive'}>Inactive</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="rangeFilter"
            label="Date joined:"
            className="date-filter"
          >
            <Space direction="" className="flex-wrap">
              <DatePicker
                onChange={onChange}
                placeholder="From"
                style={{
                  width: 270,
                }}
              />
              <DatePicker
                onChange={onChange}
                placeholder="To"
                style={{
                  width: 270,
                }}
              />
            </Space>
          </Form.Item>
          {/* <Form.Item
            name="rangeFilter"
            label="No of reports:"
            className="range-filter"
          >
            <Space wrap>
              <Select
                defaultValue="10 per page'"
                style={{
                  width: 270,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: '10',
                    label: '10 per page',
                  },
                  {
                    value: '100',
                    label: '100 per page',
                  },
                  {
                    value: '1000',
                    label: '1000 per page',
                  },
                ]}
              />
            </Space>
          </Form.Item> */}

          <Form.Item className="buttons">
            <Button
              // type="primary"
              onClick={() => setModalOpen(false)}
              htmlType="submit"
              className="me-3"
              style={{ background: '#7D0003', color: '#fff' }}
            >
              Apply
            </Button>
            <Button
              type="primary"
              onClick={() => setModalOpen(false)}
              style={{ background: '#FFF', color: '#1C1C1C' }}
            >
              Clear
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}