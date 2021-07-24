export interface ProductDto {
    id: string
    name: string
    price: string
    sale: Boolean
    discount: number
    description: string
    photos: Array<string>
}
