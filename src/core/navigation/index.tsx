export interface ItemsNavigation {
  label: string;
  path: string;
}

const itemNav: ItemsNavigation[] = [
  { label: "Trang chủ", path: "/" },
  { label: "Sản phẩm", path: "/products" },
  { label: "Về chúng tôi", path: "/about-us" },
  { label: "Giỏ hàng", path: "/cart" },
  { label: "Tài khoản", path: "/account" },
  { label: "Đăng nhập", path: "/auth/login" },
];

export default itemNav;
