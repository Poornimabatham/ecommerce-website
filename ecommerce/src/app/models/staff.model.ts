// staff.model.ts
export interface Role {
  _id: string;
  name: string;
}

export interface Staff {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: Role; // role is an object, not string
  createdAt?: string;
  updatedAt?: string;
  managerRole?: string;
}
