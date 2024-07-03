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
import { OAuthTokenWhereUniqueInput } from "./OAuthTokenWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OAuthTokenUpdateInput } from "./OAuthTokenUpdateInput";

@ArgsType()
class UpdateOAuthTokenArgs {
  @ApiProperty({
    required: true,
    type: () => OAuthTokenWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OAuthTokenWhereUniqueInput)
  @Field(() => OAuthTokenWhereUniqueInput, { nullable: false })
  where!: OAuthTokenWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OAuthTokenUpdateInput,
  })
  @ValidateNested()
  @Type(() => OAuthTokenUpdateInput)
  @Field(() => OAuthTokenUpdateInput, { nullable: false })
  data!: OAuthTokenUpdateInput;
}

export { UpdateOAuthTokenArgs as UpdateOAuthTokenArgs };
