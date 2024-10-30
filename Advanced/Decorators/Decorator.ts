function Log(target: any, propertyName: string) {
    console.log(`Property ${propertyName} was accessed`);
  }
  
  class Car {
    @Log
    model: string;
  
    constructor(model: string) {
      this.model = model;
    }
  }
  