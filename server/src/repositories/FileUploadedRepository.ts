import {
  FileUploaded,
  FileUploadedCondDTO,
  FileUploadedUpdateDTO,
} from "../models/types/FileUploaded";
import { MongoRepository } from "../share/components/MongoRepository";

export class FileUploadedRepository extends MongoRepository<
  FileUploaded,
  FileUploadedCondDTO,
  FileUploadedUpdateDTO
> {}
