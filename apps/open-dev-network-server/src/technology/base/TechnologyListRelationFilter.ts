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
import { TechnologyWhereInput } from "./TechnologyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TechnologyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TechnologyWhereInput,
  })
  @ValidateNested()
  @Type(() => TechnologyWhereInput)
  @IsOptional()
  @Field(() => TechnologyWhereInput, {
    nullable: true,
  })
  every?: TechnologyWhereInput;

  @ApiProperty({
    required: false,
    type: () => TechnologyWhereInput,
  })
  @ValidateNested()
  @Type(() => TechnologyWhereInput)
  @IsOptional()
  @Field(() => TechnologyWhereInput, {
    nullable: true,
  })
  some?: TechnologyWhereInput;

  @ApiProperty({
    required: false,
    type: () => TechnologyWhereInput,
  })
  @ValidateNested()
  @Type(() => TechnologyWhereInput)
  @IsOptional()
  @Field(() => TechnologyWhereInput, {
    nullable: true,
  })
  none?: TechnologyWhereInput;
}
export { TechnologyListRelationFilter as TechnologyListRelationFilter };
