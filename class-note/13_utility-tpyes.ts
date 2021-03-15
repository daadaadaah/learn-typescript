// 다양한 유틸리티 타입 : https://www.typescriptlang.org/docs/handbook/utility-types.html
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {

}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
function displayProductDetail(shoppingItem: ShoppingItem) {

}

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

// Pick <-> Omit
type PhoneBook = Omit<AddressBook, 'address'>
type RestaurantBookd = Omit<AddressBook, 'address'|'company'>

const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12342223333,
  company: '내 방'
}
const restaurantBookd: RestaurantBookd = {
  name: '중국집',
  phone: 44455557777
}

type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function UpdateProductItem(productItem: UpdateProduct) {

}

interface UserProfile {
  username: string;
  email: string;
  profilePhtoUrl: string;
}

// 단점 - 타입들이 불필요하게 중복 정의하게 됨
// interface UserProfileUdate {
//   username?: string;
//   email?: string;
//   profilePhtoUrl?: string;
// }

// #1
// type UserProfileUdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhtoUrl?: UserProfile['profilePhtoUrl'];
// }

// #2 : #1 코드를 줄이는 방법
// type UserProfileUdate = {
//   [p in 'username' | 'email' | 'profilePhtoUrl']?: UserProfile[p]
// }

// #3 : #2 코드를 줄이는 방법
// type UserProfileUdate = {
//   [p in keyof UserProfile]?: UserProfile[p]
// }

// #4 : #3 코드를 줄이는 방법
type Subset<T> = {
  [p in keyof T]?: T[p]
}

