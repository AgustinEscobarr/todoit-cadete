export interface UserComplete{
    id: number,
    email: string,
    fullName: string,
    address: string,
    cellPhone: string,
    isAccepted: boolean,
    isDeleted: boolean,
    observations: string,
    password: string,
    vehicle: object,
    rol: {
      id: number,
      name: string,
      isDeleted: number
    }
  }