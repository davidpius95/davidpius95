import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ProjectDtoObject")
class ProjectDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;

    @Field(() => Date)
    @Type(() => Date)
    startDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endDate!: Date;
}

export { ProjectDto as ProjectDto };