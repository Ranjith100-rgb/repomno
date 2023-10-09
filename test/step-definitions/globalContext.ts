class GlobalContext {
    private email: any;
  
    constructor() {
      this.email = null; // Initialize the variable
    }
  
    setMyVariable(value: any) {
      this.email = value;
    }
  
    getMyVariable(): any {
      return this.email;
    }
  }
  
  export default new GlobalContext();