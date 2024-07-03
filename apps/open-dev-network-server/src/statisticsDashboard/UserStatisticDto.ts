import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("UserStatisticDtoObject")
class UserStatisticDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    metric!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    value!: number;

    @Field(() => Date)
    @Type(() => Date)
    recordedAt!: Date;
}

export { UserStatisticDto as UserStatisticDto };