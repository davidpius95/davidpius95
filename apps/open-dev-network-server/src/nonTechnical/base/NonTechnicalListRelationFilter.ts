/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NonTechnicalWhereInput } from "./NonTechnicalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NonTechnicalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NonTechnicalWhereInput,
  })
  @ValidateNested()
  @Type(() => NonTechnicalWhereInput)
  @IsOptional()
  @Field(() => NonTechnicalWhereInput, {
    nullable: true,
  })
  every?: NonTechnicalWhereInput;

  @ApiProperty({
    required: false,
    type: () => NonTechnicalWhereInput,
  })
  @ValidateNested()
  @Type(() => NonTechnicalWhereInput)
  @IsOptional()
  @Field(() => NonTechnicalWhereInput, {
    nullable: true,
  })
  some?: NonTechnicalWhereInput;

  @ApiProperty({
    required: false,
    type: () => NonTechnicalWhereInput,
  })
  @ValidateNested()
  @Type(() => NonTechnicalWhereInput)
  @IsOptional()
  @Field(() => NonTechnicalWhereInput, {
    nullable: true,
  })
  none?: NonTechnicalWhereInput;
}
export { NonTechnicalListRelationFilter as NonTechnicalListRelationFilter };