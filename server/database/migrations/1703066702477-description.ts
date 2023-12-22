import {MigrationInterface, QueryRunner} from "typeorm";

export class description1703066702477 implements MigrationInterface {
    name = 'description1703066702477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "page" ALTER COLUMN "link" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" ALTER COLUMN "link" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "page" DROP COLUMN "description"`);
    }

}
