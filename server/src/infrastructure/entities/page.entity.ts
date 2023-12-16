import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Page {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { nullable: false })
  title: string;

  @Column('varchar', { nullable: false })
  icon: string;

  @Column('varchar', { nullable: false })
  color: string;

  @Column('varchar', { nullable: false })
  form: string;

  @Column('varchar', { nullable: false })
  link: string;
}
