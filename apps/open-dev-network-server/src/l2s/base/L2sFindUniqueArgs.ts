/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { L2sWhereUniqueInput } from "./L2sWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class L2sFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => L2sWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => L2sWhereUniqueInput)
  @Field(() => L2sWhereUniqueInput, { nullable: false })
  where!: L2sWhereUniqueInput;
}

export { L2sFindUniqueArgs as L2sFindUniqueArgs };