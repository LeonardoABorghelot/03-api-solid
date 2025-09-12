import { UsersRepository } from "src/repositories/users-repository";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetUserProfileServiceRequest {
  userId: string;
}

interface GetUserProfileServicResponse {
  user: User;
}

export class GetUserProfileService {
  constructor(private userRepository: UsersRepository) {}

  async excute({
    userId,
  }: GetUserProfileServiceRequest): Promise<GetUserProfileServicResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return {
      user,
    };
  }
}
