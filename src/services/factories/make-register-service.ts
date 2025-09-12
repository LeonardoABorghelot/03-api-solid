import { PrismaUsersRepository } from "src/repositories/prisma/prisma-users-repository"
import { RegisterService } from "../register"

export function makeRegisterService () {
    const UserRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(UserRepository)

    return registerService
}