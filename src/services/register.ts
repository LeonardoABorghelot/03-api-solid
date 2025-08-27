import { hash } from "bcryptjs";

import { UsersRepository } from "src/repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

interface RegisterServiceRequest {
    nome: string,
    email: string,
    password: string
}

//D - Dependency Inversion Principle

export class RegisterService{
  constructor (private userRepository: UsersRepository){}

  async execute({nome, email, password,}: RegisterServiceRequest) {
      const password_hash = await hash(password, 6);
    
      const userWithSameEmail = await this.userRepository.findByEmail(email)
    
      if (userWithSameEmail) {
        throw new UserAlreadyExistsError()
      }

      await this.userRepository.create({
        nome, 
        email,
        password_hash
      })
    }

}