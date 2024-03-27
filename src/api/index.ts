import { registerOverriddenValidators } from '@medusajs/medusa';
import {IsOptional, IsString} from 'class-validator';
import { AdminPostProductsProductVariantsVariantReq as MedusaAdminPostProductsProductVariantsVariantReq } from '@medusajs/medusa/dist/api/routes/admin/products/update-variant';

class AdminPostProductsProductVariantsVariantReq extends MedusaAdminPostProductsProductVariantsVariantReq {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    mime_type?: string;

    @IsString()
    @IsOptional()
    file_key?: string;

}

registerOverriddenValidators(AdminPostProductsProductVariantsVariantReq);
