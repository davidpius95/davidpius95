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
import { UserActivityWhereUniqueInput } from "./UserActivityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserActivityUpdateInput } from "./UserActivityUpdateInput";

@ArgsType()
class UpdateUserActivityArgs {
  @ApiProperty({
    required: true,
    type: () => UserActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserActivityWhereUniqueInput)
  @Field(() => UserActivityWhereUniqueInput, { nullable: false })
  where!: UserActivityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserActivityUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserActivityUpdateInput)
  @Field(() => UserActivityUpdateInput, { nullable: false })
  data!: UserActivityUpdateInput;
}

export { UpdateUserActivityArgs as UpdateUserActivityArgs };
