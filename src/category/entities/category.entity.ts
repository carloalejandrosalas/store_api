import { EntityBase } from "src/entity-base";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Category extends EntityBase {
    @Column({ length: 45 })
    name: string

    @OneToMany(() => Product, product => product.category )
    products: Product[]
}
