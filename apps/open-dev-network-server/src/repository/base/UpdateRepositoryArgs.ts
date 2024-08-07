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
import { RepositoryWhereUniqueInput } from "./RepositoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RepositoryUpdateInput } from "./RepositoryUpdateInput";

@ArgsType()
class UpdateRepositoryArgs {
  @ApiProperty({
    required: true,
    type: () => RepositoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepositoryWhereUniqueInput)
  @Field(() => RepositoryWhereUniqueInput, { nullable: false })
  where!: RepositoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RepositoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => RepositoryUpdateInput)
  @Field(() => RepositoryUpdateInput, { nullable: false })
  data!: RepositoryUpdateInput;
}

export { UpdateRepositoryArgs as UpdateRepositoryArgs };
