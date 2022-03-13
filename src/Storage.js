
class Storage {

    static has(key){
        localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }
    static get(){

    }
    static set(key, data){
        let setData = [];
        if(this.has(key)){
            setData.setItem(key, JSON.stringify());
          
        }

    }
    


}
export default Storage;