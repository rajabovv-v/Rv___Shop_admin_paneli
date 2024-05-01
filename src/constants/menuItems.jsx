import { Link } from "react-router-dom";
import {
  AlignLeftOutlined,
  HomeOutlined,
  InboxOutlined,
  AppstoreOutlined,
  PicRightOutlined,
  BorderOutlined,
} from "@ant-design/icons";
export const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "/products",
    icon: <InboxOutlined />,
    label: <Link to="/products">Products</Link>,
  },
  {
    key: "/categories",
    icon: <AlignLeftOutlined />,
    label: <Link to="/categories">Categories</Link>,
  },
  {
    key: "/brands",
    icon: <AppstoreOutlined />,
    label: <Link to="/brands">Brands</Link>,
  },
  {
    key: "/banners",
    icon: <PicRightOutlined />,
    label: <Link to="/banners">Banners</Link>,
  },
  {
    key: "/orders",
    icon: <BorderOutlined />,
    label: <Link to={"/orders"}>Orders</Link>,
  },
];
