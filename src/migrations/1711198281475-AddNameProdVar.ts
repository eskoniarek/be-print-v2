import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameProdVar1711198281475 implements MigrationInterface {
      public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `ALTER TABLE "product_variant" ADD COLUMN "name" character varying NULL`
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `ALTER TABLE "product_variant" DROP COLUMN "name" character varying NULL`
        );
      }
    }
    