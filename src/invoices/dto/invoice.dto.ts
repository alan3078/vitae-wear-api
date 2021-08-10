import { ProductDto } from '../../products/dto/product.dto';

export interface InvoiceDto {
    id: string
    currencyCode: string
    date: Date
    dueDate: Date
    items: ProductDto[]
}
