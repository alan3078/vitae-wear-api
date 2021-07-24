import { brand } from '../../common/interfaces/brand.interface'
import { category } from '../../common/interfaces/category.interface'
import { size } from '../../common/interfaces/size.interface'

export interface ProductDto {
    id: string
    name: string
    category: category['name']
    size: size['name']
    brand: brand['name']
    price: number
    sale: Boolean
    discount: number
    description: string
    photos: Array<string>
}
