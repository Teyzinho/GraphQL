import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver()
export class AppointmentsResolvers {


  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const teste = {
      title: 'My appointment title'
    }
    return teste
  }

  @Query(() => String)
  async helloWorld(){
    return 'hello world'
  }
}