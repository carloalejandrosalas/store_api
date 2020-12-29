import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 30, unique: true })
    username: string

    @Column({ length: 45 })
    first_name: string

    @Column({ length: 45 })
    last_name: string

    @Column({ default: true })
    is_active: boolean

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'datetime', nullable: true })
    updated_at: Date
}
