import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export abstract class EntityBase {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'datetime', nullable: true })
    updated_at: Date
}