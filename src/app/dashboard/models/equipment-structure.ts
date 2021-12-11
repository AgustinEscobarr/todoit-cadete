export interface EquipmentData{
    equipmentId: number,
    mark: string,
    model: string,
    failure: string,
    travelEquipmentDTOs: [
      {
        id: number,
        operationDate: string,
        observation: string|null,
        cadete: {
            id: 70,
            email: string,
            fullName: string,
            address: string,
            cellPhone: string
          },
        operator: {
          id: 42,
          email: string,
          fullName: string,
          address: string,
          cellPhone: string
        },
        equipment: null,
        statusTravel: number
      }
     
    ]
  }