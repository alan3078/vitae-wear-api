import { Category, Size } from '../../enums/common-enums'

export interface ProductDto {
    id: string
    name: string
    category: Category
    description: string
    discount: number
    photos: Array<string>
    price: number
    sale: Boolean
    size: Size
    stock: number
}