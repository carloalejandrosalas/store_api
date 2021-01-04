import { EntityBase } from "src/entity-base"
import { Column, Entity, ManyToOne } from "typeorm"
import { Role } from "./role.entity"

@Entity()
export class User extends EntityBase {
    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 30, unique: true })
    username: string

    @Column({ length: 45 })
    first_name: string

    @Column({ length: 45 })
    last_name: string

    @Column()
    password: string

    @Column({ default: true })
    is_active: boolean
    
    @ManyToOne(() => Role, type => type.users, {nullable: false} )
    role: Role
}
