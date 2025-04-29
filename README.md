# 🪑 Nội Thất Quankz – Website Bán Bàn Ghế

Một website hiện đại, tốc độ cao được xây dựng bằng **React**, **Vite** và **TypeScript** nhằm trưng bày và kinh doanh các sản phẩm nội thất như bàn, ghế, và các phụ kiện liên quan.

---

## 📦 Công Nghệ Sử Dụng

- ⚛️ **React** – Thư viện xây dựng giao diện người dùng
- ⚡ **Vite** – Công cụ build siêu tốc
- 🔡 **TypeScript** – Kiểu dữ liệu tĩnh cho JavaScript
- 🎨 **Tailwind CSS** – Framework CSS dạng utility-first (khuyến khích dùng)
- 🧪 **Vitest / Jest** – Framework kiểm thử
- 📁 **ESLint + Prettier** – Kiểm tra và định dạng mã nguồn

---

## 🛒 Tính Năng Chính

- Hiển thị danh mục sản phẩm: bàn, ghế, bộ bàn ăn, ghế sofa, v.v.
- Giỏ hàng và thanh toán đơn giản
- Tìm kiếm và lọc theo danh mục hoặc giá
- Trang quản lý sản phẩm (cho admin)
- Giao diện responsive, tối ưu cho cả desktop và mobile

---

## 📂 Cấu Trúc Dự Án

```
├── public/             # Tệp tĩnh (ảnh, favicon, v.v.)
├── src/                
│   ├── assets/         # Hình ảnh sản phẩm, font chữ
│   ├── components/     # Component giao diện như Header, ProductCard, Cart
│   ├── pages/          # Trang chính: Home, ProductDetail, Cart, Checkout
│   ├── hooks/          # Custom hooks (useCart, useFetch, v.v.)
│   ├── types/          # Định nghĩa kiểu dữ liệu (Product, CartItem...)
│   ├── App.tsx         # Component gốc
│   └── main.tsx        # Điểm khởi đầu
├── index.html          
├── vite.config.ts      
├── tsconfig.json       
└── .eslintrc.cjs       
```

---

## 🚀 Bắt Đầu

### 1. Clone dự án

```bash
git clone https://github.com/Quankzx/Web_Ban_Noi_That.git
cd Web_Ban_Noi_That
```

### 2. Cài đặt thư viện

```bash
npm install
# hoặc
yarn
```

### 3. Chạy ở chế độ phát triển

```bash
npm run dev
# hoặc
yarn dev
```

### 4. Build bản production

```bash
npm run build
```

### 5. Xem thử bản build

```bash
npm run preview
```

---

## 🧪 Kiểm Thử

```bash
npm run test
```

> Có thể chọn giữa [Vitest](https://vitest.dev/) hoặc [Jest](https://jestjs.io/) tùy theo nhu cầu.

---

## 🔧 Kiểm Tra & Định Dạng

```bash
npm run lint      # Kiểm tra lint
npm run format    # Định dạng mã nguồn với Prettier
```

---

## 🌐 Biến Môi Trường

Tạo file `.env` ở thư mục gốc:

```
VITE_API_URL=https://api.noithatquankz.com
VITE_APP_NAME=NoiThatQuankz
```

> Lưu ý: Các biến môi trường cần bắt đầu bằng `VITE_` để Vite nhận diện.

---

## 📌 Scripts

| Lệnh            | Mô tả                            |
|-----------------|----------------------------------|
| `dev`           | Chạy server phát triển          |
| `build`         | Build production bundle         |
| `preview`       | Xem thử bản production          |
| `test`          | Chạy kiểm thử                   |
| `lint`          | Kiểm tra lỗi lint               |
| `format`        | Định dạng mã                    |

---

## 💡 Gợi Ý Triển Khai

- Sử dụng hình ảnh chất lượng cao, nén bằng WebP để tối ưu tải trang.
- Tích hợp Stripe hoặc VNPay cho thanh toán.
- Có thể mở rộng thêm hệ thống đăng nhập/đăng ký và theo dõi đơn hàng.

---

## 📄 Giấy Phép

MIT © [Quankz](https://github.com/Quankzx)
