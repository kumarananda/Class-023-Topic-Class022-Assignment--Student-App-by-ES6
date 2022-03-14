
class LStorage {

    /**
     * check LS data
     * @param {*} key 
     * @returns 
     */
    static has(key){
      return  localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }

    /**
     *get all LS data 
     * @param {*} key 
     */
    static get(key){
        if(this.has(key)){
        return JSON.parse(this.has(key))
        }else{
            return "No data found"
        }
    }
    /**
     * set new LS data
     * @param {*} key 
     * @param {*} data 
     */
    static set(key, data){
        let setData = [];
        if(this.has(key)){
            setData = JSON.parse(this.has(key))
          
        }

        setData.push(data);
        localStorage.setItem(key, JSON.stringify(setData));

    }
    


}
export default LStorage;

// time 1h