import z from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { UserAlreadyExistsError } from "src/services/errors/user-already-exists-error";
import { makeRegisterService } from "src/services/factories/make-register-service";


export async function register (request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    nome : z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { nome, email, password } = registerBodySchema.parse(request.body)

  try {

    const registerService = makeRegisterService()

    await registerService.execute({
      nome, 
      email, 
      password
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError){
    return reply.status(409).send({ message: err.message })
    }
    
    throw err
  }

  return reply.status(201).send()
} 