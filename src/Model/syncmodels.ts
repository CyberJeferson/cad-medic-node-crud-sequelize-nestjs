import { sqz } from '../Configure/conn';
class syncmodels {
    
  public async syncModels(){
    try {
        const database = sqz; 
        const result = await database.sync();

        console.log(result);
    } catch (exception) {
        console.log(exception);
    }
  }
}
export {syncmodels}