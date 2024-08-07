/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TechnologyWhereUniqueInput } from "../../technology/base/TechnologyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TechnologyUpdateManyWithoutProjectsInput {
  @Field(() => [TechnologyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TechnologyWhereUniqueInput],
  })
  connect?: Array<TechnologyWhereUniqueInput>;

  @Field(() => [TechnologyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TechnologyWhereUniqueInput],
  })
  disconnect?: Array<TechnologyWhereUniqueInput>;

  @Field(() => [TechnologyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TechnologyWhereUniqueInput],
  })
  set?: Array<TechnologyWhereUniqueInput>;
}

export { TechnologyUpdateManyWithoutProjectsInput as TechnologyUpdateManyWithoutProjectsInput };
