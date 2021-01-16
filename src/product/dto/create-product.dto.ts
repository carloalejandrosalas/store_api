import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string

    @IsInt ()
    categoryId: number

    @IsString()
    description: string

    @IsString()
    code: string

    @IsString()
    bar_code: string

    @IsNumber()
    price: number

}
