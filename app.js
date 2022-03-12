
// get elenents 
const staff_Add_Form = document.getElementById('staff_Add_Form');

staff_Add_Form.addEventListener('submit', function (e) {
    e.preventDefault();

    let form_data = new FormData(e.target);
    // console.log(form_data); //>>  FormData {  }

    let data = Object.fromEntries(form_data.entries())
    console.log(data); // Object { name: "", call: "", location: "", gender: "Male", photo: "" } //browser
    
    
})

// check with browser console log
// 31: min validation
