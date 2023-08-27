import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Appointment { //Tudo que quero que retorne para o frontEnd
    @Field()
    title: string;
}