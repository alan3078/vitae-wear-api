import { ProductDto } from '../../products/dto/product.dto'

export interface stock extends ProductDto {
    id: ProductDto['id']
    quantity: number
}
