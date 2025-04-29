export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  categorySlug: string;
  features: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  colors: {
    name: string;
    value: string;
  }[];
  materials: string[];
  inStock: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  related: string[];
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Sofa góc chữ L',
    slug: 'sofa-goc-chu-l',
    price: 15900000,
    salePrice: 13900000,
    description: 'Sofa góc chữ L hiện đại với thiết kế tối giản, bọc vải cao cấp chống thấm nước và chống bám bẩn. Khung gỗ tự nhiên chắc chắn, đệm mút êm ái mang lại cảm giác thoải mái tuyệt đối.',
    shortDescription: 'Sofa góc chữ L hiện đại với thiết kế tối giản, bọc vải cao cấp.',
    images: [
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg'
    ],
    category: 'Sofa',
    categorySlug: 'sofa',
    features: [
      'Khung gỗ tự nhiên bền chắc',
      'Vải bọc cao cấp chống thấm nước, chống bám bẩn',
      'Đệm mút D40 êm ái, không xẹp lún',
      'Thiết kế góc linh hoạt phù hợp nhiều không gian',
      'Dễ tháo rời và vệ sinh'
    ],
    dimensions: {
      width: 250,
      height: 85,
      depth: 180
    },
    colors: [
      { name: 'Xám đậm', value: '#424242' },
      { name: 'Xám nhạt', value: '#9e9e9e' },
      { name: 'Xanh navy', value: '#1a237e' },
      { name: 'Nâu', value: '#795548' }
    ],
    materials: [
      'Khung gỗ tự nhiên',
      'Vải bọc polyester cao cấp',
      'Đệm mút D40'
    ],
    inStock: true,
    bestSeller: true,
    related: ['p2', 'p3', 'p8']
  },
  {
    id: 'p2',
    name: 'Bàn ăn gỗ sồi 6 ghế',
    slug: 'ban-an-go-soi-6-ghe',
    price: 12500000,
    description: 'Bàn ăn gỗ sồi tự nhiên kèm 6 ghế với thiết kế hiện đại, tối giản. Mặt bàn được làm từ gỗ sồi nguyên khối, chân bàn vững chắc. Ghế ăn có đệm ngồi êm ái, bọc vải cao cấp.',
    shortDescription: 'Bàn ăn gỗ sồi tự nhiên kèm 6 ghế với thiết kế hiện đại, tối giản.',
    images: [
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg',
      'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg'
    ],
    category: 'Bàn ăn',
    categorySlug: 'ban-an',
    features: [
      'Mặt bàn gỗ sồi nguyên khối cao cấp',
      'Thiết kế hiện đại, tối giản',
      'Kèm 6 ghế ăn bọc vải cao cấp',
      'Chân bàn chắc chắn, chống trượt',
      'Dễ dàng lắp đặt và vệ sinh'
    ],
    dimensions: {
      width: 160,
      height: 75,
      depth: 90
    },
    colors: [
      { name: 'Gỗ sồi tự nhiên', value: '#d7bc91' },
      { name: 'Gỗ sồi màu nâu đậm', value: '#795548' }
    ],
    materials: [
      'Gỗ sồi tự nhiên',
      'Vải bọc ghế polyester cao cấp',
      'Chân bàn kim loại sơn tĩnh điện'
    ],
    inStock: true,
    bestSeller: true,
    related: ['p7', 'p8', 'p9']
  },
  {
    id: 'p3',
    name: 'Giường ngủ gỗ tự nhiên',
    slug: 'giuong-ngu-go-tu-nhien',
    price: 8900000,
    description: 'Giường ngủ làm từ gỗ tự nhiên 100% với thiết kế hiện đại, tối giản. Khung giường chắc chắn, bền đẹp theo thời gian. Đầu giường có thiết kế độc đáo, tạo điểm nhấn cho phòng ngủ.',
    shortDescription: 'Giường ngủ làm từ gỗ tự nhiên 100% với thiết kế hiện đại, tối giản.',
    images: [
      'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg',
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg'
    ],
    category: 'Giường ngủ',
    categorySlug: 'giuong-ngu',
    features: [
      'Làm từ gỗ tự nhiên 100%',
      'Thiết kế hiện đại, tối giản',
      'Đầu giường độc đáo, tạo điểm nhấn',
      'Khung giường chắc chắn, chịu lực tốt',
      'Dễ dàng lắp đặt và vệ sinh'
    ],
    dimensions: {
      width: 160,
      height: 45,
      depth: 200
    },
    colors: [
      { name: 'Gỗ tự nhiên', value: '#d7bc91' },
      { name: 'Gỗ nâu đậm', value: '#5d4037' }
    ],
    materials: [
      'Gỗ tự nhiên',
      'Ván gỗ công nghiệp cao cấp',
      'Phụ kiện kim loại cao cấp'
    ],
    inStock: true,
    bestSeller: true,
    related: ['p7', 'p4', 'p6']
  },
  {
    id: 'p4',
    name: 'Ghế thư giãn',
    slug: 'ghe-thu-gian',
    price: 4500000,
    description: 'Ghế thư giãn với thiết kế công thái học giúp bạn thư giãn tối đa. Bọc vải cao cấp mềm mại, với đệm mút dày đảm bảo sự thoải mái. Chân ghế làm từ gỗ tự nhiên chắc chắn.',
    shortDescription: 'Ghế thư giãn với thiết kế công thái học giúp bạn thư giãn tối đa.',
    images: [
      'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg',
      'https://images.pexels.com/photos/4210337/pexels-photo-4210337.jpeg',
      'https://images.pexels.com/photos/6527001/pexels-photo-6527001.jpeg'
    ],
    category: 'Ghế',
    categorySlug: 'ghe',
    features: [
      'Thiết kế công thái học',
      'Bọc vải cao cấp mềm mại',
      'Đệm mút dày êm ái',
      'Chân ghế gỗ tự nhiên chắc chắn',
      'Góc nghiêng phù hợp giúp thư giãn tối đa'
    ],
    dimensions: {
      width: 70,
      height: 100,
      depth: 80
    },
    colors: [
      { name: 'Xám', value: '#9e9e9e' },
      { name: 'Xanh lá', value: '#388e3c' },
      { name: 'Cam', value: '#e64a19' }
    ],
    materials: [
      'Vải bọc polyester cao cấp',
      'Đệm mút cao su non',
      'Khung gỗ tự nhiên'
    ],
    inStock: true,
    bestSeller: true,
    related: ['p1', 'p5', 'p9']
  },
  {
    id: 'p5',
    name: 'Bàn làm việc gỗ',
    slug: 'ban-lam-viec-go',
    price: 3600000,
    salePrice: 3200000,
    description: 'Bàn làm việc từ gỗ tự nhiên với thiết kế hiện đại, đơn giản. Mặt bàn rộng rãi, có ngăn kéo tiện lợi giúp lưu trữ đồ dùng văn phòng. Chân bàn chắc chắn, ổn định.',
    shortDescription: 'Bàn làm việc từ gỗ tự nhiên với thiết kế hiện đại, đơn giản.',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
      'https://images.pexels.com/photos/3759069/pexels-photo-3759069.jpeg',
      'https://images.pexels.com/photos/4061393/pexels-photo-4061393.jpeg'
    ],
    category: 'Bàn làm việc',
    categorySlug: 'ban-lam-viec',
    features: [
      'Làm từ gỗ tự nhiên cao cấp',
      'Thiết kế hiện đại, đơn giản',
      'Mặt bàn rộng rãi, thoải mái',
      'Có ngăn kéo tiện lợi',
      'Chân bàn chắc chắn, ổn định'
    ],
    dimensions: {
      width: 120,
      height: 75,
      depth: 60
    },
    colors: [
      { name: 'Gỗ tự nhiên', value: '#d7bc91' },
      { name: 'Gỗ nâu đậm', value: '#5d4037' },
      { name: 'Gỗ trắng', value: '#f5f5f5' }
    ],
    materials: [
      'Gỗ tự nhiên',
      'Ván gỗ công nghiệp cao cấp',
      'Phụ kiện kim loại cao cấp'
    ],
    inStock: true,
    bestSeller: false,
    newArrival: true,
    related: ['p4', 'p7', 'p9']
  },
  {
    id: 'p6',
    name: 'Kệ tivi hiện đại',
    slug: 'ke-tivi-hien-dai',
    price: 5200000,
    description: 'Kệ tivi hiện đại với thiết kế tối giản, tinh tế. Mặt kệ rộng rãi có thể đặt TV lớn, ngăn kéo và giá đỡ tiện lợi giúp lưu trữ thiết bị điện tử và đồ dùng khác.',
    shortDescription: 'Kệ tivi hiện đại với thiết kế tối giản, tinh tế.',
    images: [
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/9107360/pexels-photo-9107360.jpeg'
    ],
    category: 'Kệ tivi',
    categorySlug: 'ke-tivi',
    features: [
      'Thiết kế hiện đại, tối giản',
      'Mặt kệ rộng rãi, chịu lực tốt',
      'Nhiều ngăn kéo và giá đỡ tiện lợi',
      'Dễ dàng lắp đặt và vệ sinh',
      'Khung kệ chắc chắn, ổn định'
    ],
    dimensions: {
      width: 160,
      height: 50,
      depth: 40
    },
    colors: [
      { name: 'Trắng', value: '#ffffff' },
      { name: 'Đen', value: '#212121' },
      { name: 'Nâu gỗ', value: '#795548' }
    ],
    materials: [
      'Gỗ công nghiệp cao cấp',
      'Mặt kệ phủ melamine chống xước',
      'Phụ kiện kim loại cao cấp'
    ],
    inStock: true,
    newArrival: true,
    related: ['p1', 'p8', 'p3']
  },
  {
    id: 'p7',
    name: 'Tủ quần áo 3 cánh',
    slug: 'tu-quan-ao-3-canh',
    price: 7400000,
    description: 'Tủ quần áo 3 cánh với thiết kế hiện đại, rộng rãi. Bên trong có nhiều ngăn và thanh treo quần áo tiện lợi. Cánh tủ có gương soi toàn thân giúp tiết kiệm không gian.',
    shortDescription: 'Tủ quần áo 3 cánh với thiết kế hiện đại, rộng rãi.',
    images: [
      'https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg'
    ],
    category: 'Tủ quần áo',
    categorySlug: 'tu-quan-ao',
    features: [
      'Thiết kế hiện đại, rộng rãi',
      'Nhiều ngăn và thanh treo quần áo tiện lợi',
      'Cánh tủ có gương soi toàn thân',
      'Chất liệu cao cấp, bền đẹp',
      'Dễ dàng lắp đặt và vệ sinh'
    ],
    dimensions: {
      width: 150,
      height: 200,
      depth: 60
    },
    colors: [
      { name: 'Trắng', value: '#ffffff' },
      { name: 'Nâu gỗ', value: '#795548' }
    ],
    materials: [
      'Gỗ công nghiệp cao cấp',
      'Mặt tủ phủ melamine chống xước',
      'Gương soi cao cấp',
      'Phụ kiện kim loại cao cấp'
    ],
    inStock: true,
    newArrival: true,
    related: ['p3', 'p5', 'p6']
  },
  {
    id: 'p8',
    name: 'Bàn cà phê gỗ teak',
    slug: 'ban-ca-phe-go-teak',
    price: 2900000,
    description: 'Bàn cà phê làm từ gỗ teak tự nhiên với thiết kế đơn giản, tinh tế. Mặt bàn được chế tác tỉ mỉ, chân bàn vững chắc. Sản phẩm phù hợp với nhiều phong cách nội thất khác nhau.',
    shortDescription: 'Bàn cà phê làm từ gỗ teak tự nhiên với thiết kế đơn giản, tinh tế.',
    images: [
      'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
      'https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg'
    ],
    category: 'Bàn cà phê',
    categorySlug: 'ban-ca-phe',
    features: [
      'Làm từ gỗ teak tự nhiên cao cấp',
      'Thiết kế đơn giản, tinh tế',
      'Mặt bàn được chế tác tỉ mỉ',
      'Chân bàn vững chắc, ổn định',
      'Phù hợp với nhiều phong cách nội thất'
    ],
    dimensions: {
      width: 90,
      height: 45,
      depth: 60
    },
    colors: [
      { name: 'Gỗ teak tự nhiên', value: '#ba8c63' }
    ],
    materials: [
      'Gỗ teak tự nhiên',
      'Phụ kiện kim loại cao cấp'
    ],
    inStock: true,
    newArrival: true,
    related: ['p1', 'p2', 'p6']
  },
  {
    id: 'p9',
    name: 'Ghế bar chân sắt',
    slug: 'ghe-bar-chan-sat',
    price: 1800000,
    description: 'Ghế bar với thiết kế hiện đại, đơn giản. Mặt ngồi bọc da PU cao cấp, chân ghế làm từ sắt sơn tĩnh điện chắc chắn. Chiều cao ghế phù hợp với quầy bar tiêu chuẩn.',
    shortDescription: 'Ghế bar với thiết kế hiện đại, đơn giản.',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/5824885/pexels-photo-5824885.jpeg',
      'https://images.pexels.com/photos/6489090/pexels-photo-6489090.jpeg'
    ],
    category: 'Ghế bar',
    categorySlug: 'ghe-bar',
    features: [
      'Thiết kế hiện đại, đơn giản',
      'Mặt ngồi bọc da PU cao cấp',
      'Chân ghế sắt sơn tĩnh điện chắc chắn',
      'Chiều cao phù hợp với quầy bar tiêu chuẩn',
      'Dễ dàng lắp đặt và vệ sinh'
    ],
    dimensions: {
      width: 40,
      height: 75,
      depth: 40
    },
    colors: [
      { name: 'Đen', value: '#212121' },
      { name: 'Nâu', value: '#795548' },
      { name: 'Xám', value: '#9e9e9e' }
    ],
    materials: [
      'Mặt ngồi bọc da PU cao cấp',
      'Khung và chân ghế sắt sơn tĩnh điện',
      'Đệm mút cao su non'
    ],
    inStock: true,
    newArrival: true,
    related: ['p2', 'p4', 'p5']
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return product.related
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => product.categorySlug === categorySlug);
};

export const getBestSellingProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};