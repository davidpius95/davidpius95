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
import { UserStatisticWhereInput } from "./UserStatisticWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserStatisticListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserStatisticWhereInput,
  })
  @ValidateNested()
  @Type(() => UserStatisticWhereInput)
  @IsOptional()
  @Field(() => UserStatisticWhereInput, {
    nullable: true,
  })
  every?: UserStatisticWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserStatisticWhereInput,
  })
  @ValidateNested()
  @Type(() => UserStatisticWhereInput)
  @IsOptional()
  @Field(() => UserStatisticWhereInput, {
    nullable: true,
  })
  some?: UserStatisticWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserStatisticWhereInput,
  })
  @ValidateNested()
  @Type(() => UserStatisticWhereInput)
  @IsOptional()
  @Field(() => UserStatisticWhereInput, {
    nullable: true,
  })
  none?: UserStatisticWhereInput;
}
export { UserStatisticListRelationFilter as UserStatisticListRelationFilter };
