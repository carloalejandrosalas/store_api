import { Category } from "src/category/entities/category.entity";
import { EntityBase } from "src/entity-base";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Product extends EntityBase {
    @Column({ length: 170, unique: true })
    name: string

    @Column({ type: 'text' })
    description: string

    @Column({ unique: true })
    code: string

    @Column({ unique: true })
    bar_code: string

    @Column({ type: 'decimal' })
    price: number

    @ManyToOne(() => Category, category => category.products)
    category: Category
}
