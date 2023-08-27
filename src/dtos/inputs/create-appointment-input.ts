import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
    @Field()
    title: string;
}