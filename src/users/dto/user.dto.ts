export interface UserDto {
    id: string
    email: string
    password: string
    firstName?: string
    lastName?: string
    invoiceNumber: number
    address: string
    tag: string
    phone: number
    permissionLevel?: number
}
