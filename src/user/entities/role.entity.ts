import { EntityBase } from "src/entity-base"
import { Column, Entity, OneToMany } from "typeorm"
import { User } from "./user.entity"

@Entity()
export class Role extends EntityBase {
    
    @Column({ length: 100, unique: true })
    name: string

    @OneToMany(() => User, user => user.role )
    users: User[]
}
