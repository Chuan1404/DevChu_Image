import { EModelStatus } from "../../share/enums";

export type VertificationCode = {
  id: string;
  value: string;
  userId: string;
  status: EModelStatus;
  createdDate: Date;
  updatedDate: Date;
};

export type VertificationCodeCreateDTO = {
  value: string;
  userId: string;
};

export type VertificationCodeUpdateDTO = {
  value?: string;
  status?: EModelStatus;
};

export type VertificationCodeCondDTO = {
  value?: string;
  userId?: string;
  status?: EModelStatus;
};
