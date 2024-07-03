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
import { IssueWhereUniqueInput } from "./IssueWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class IssueFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => IssueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IssueWhereUniqueInput)
  @Field(() => IssueWhereUniqueInput, { nullable: false })
  where!: IssueWhereUniqueInput;
}

export { IssueFindUniqueArgs as IssueFindUniqueArgs };
