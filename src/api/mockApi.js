export const mockProducts = [
  {
    id: 1,
    name: 'Елка',
    price: 89990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 2,
    name: 'Елка',
    price: 249990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 3,
    name: 'Елка',
    price: 34990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 4,
    name: 'Елка',
    price: 44990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 5,
    name: 'Елка',
    price: 129990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 6,
    name: 'Елка',
    price: 199990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 7,
    name: 'Елка',
    price: 59990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 8,
    name: 'Елка',
    price: 8990,
    image: 'https://damcdn.samokat.ru/dam-storage-ext-env-prod/2025/12/d2f0c344-f1c8-4f6e-b3eb-df8712224dfb',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  }
];


export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};

