// categories
export const categoriesList = "/categorys";
export const categoriesPost = "/categorys";
export const categoriesPatch = (id) => `/categorys/${id}`;
export const categoriesDelete = (id) => `/categorys/${id}`;

// Brands

export const brandsList = "/brands";
export const brandsPost = "/brands";
export const brandsPatch = (id) => `/brands/${id}`;
export const brandsDelete = (id) => `/brands/${id}`;

// Products

export const productsList = "/products";
export const productsPost = "/products";
export const productsPatch = (id) => `/products/${id}`;
export const productsDelete = (id) => `/products/${id}`;

//Banner
export const bannerList = "/banners";
export const bannerPost = "/banners";
export const bannerPatch = (id) => `/banners/${id}`;
export const bannerDelete = (id) => `/banners/${id}`;


//Order
export const ordersList = '/orders?_relations=products,users'
export const ordersPost = '/orders'
export const ordersPatch = (id) => `/orders/${id}`
export const ordersDelete = (id) => `/orders/${id}`

//Users

export const usersList = '/users'
export const usersPost = '/users'
export const usersPatch = (id) => `/users/${id}`
export const usersDelete = (id) => `/users/${id}`