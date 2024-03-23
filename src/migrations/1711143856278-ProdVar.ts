import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProductVariantFieldsFormat1711143856278 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_variant" ADD COLUMN "file_key" character varying NULL`
    );

    await queryRunner.query(
      `ALTER TABLE "product_variant" ADD COLUMN "mime_type" character varying NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_variant" 
      DROP COLUMN "file_key"`
    );

    await queryRunner.query(
      `ALTER TABLE "product_variant" 
      DROP COLUMN "mime_type"`
    );
  }
}
