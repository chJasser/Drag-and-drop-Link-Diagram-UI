import {MigrationInterface, QueryRunner} from "typeorm";

export class page1702818442132 implements MigrationInterface {
    name = 'page1702818442132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "page" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "icon" character varying NOT NULL, "color" character varying NOT NULL, "form" character varying NOT NULL, "link" character varying NOT NULL, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "page"`);
    }

}
