import  Alert  from "./src/Alert.js";
import Storage from "./src/Storage.js";

// get elenents 
const staff_Add_Form = document.getElementById('staff_Add_Form');

staff_Add_Form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const mess = document.querySelector('.mess');

    let form_data = new FormData(e.target);
    // console.log(form_data); //>>  FormData {  }

    let data = Object.fromEntries(form_data.entries())
    // console.log(data); // Object { name: "", call: "", location: "", gender: "Male", photo: "" } //browser
    let { photo, gender, location, call, name } = data;

    if(photo == ''|| gender == '' || location == '' || call == '' || name == ''){
        mess.innerHTML = Alert.danger('All filds are require')
    }else {
        Storage.set("staff", data)
    }
    
})

// check with browser console log
// 31: min validation
