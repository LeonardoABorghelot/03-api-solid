import { PrismaUsersRepository } from "src/repositories/prisma/prisma-users-repository"
import { AuthenticateService } from "../authenticate"

export function makeAuthenticateService () {
    const UserRepository = new PrismaUsersRepository()
    const authenticateService = new AuthenticateService(UserRepository)

    return authenticateService
}