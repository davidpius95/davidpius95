import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("UserActivityDtoObject")
class UserActivityDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    action!: string;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;
}

export { UserActivityDto as UserActivityDto };