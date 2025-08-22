import { prisma } from "src/lib/prisma";
import z from "zod";
import { FastifyRequest, FastifyReply } from "fastify";


export async function register (request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    nome : z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { nome, email, password } = registerBodySchema.parse(request.body)

  await prisma.user.create({
    data: {
      nome,
      email,
      password_hash: password,
    },
  })

  return reply.status(201).send()
} 