import  Alert  from "./src/Alert.js";
import LStorage from "./src/LStorage.js";

// get elenents 
const staff_Add_Form = document.getElementById('staff_Add_Form');
const staff_data_list = document.getElementById('staff_data_list');
const view_staff_data = document.getElementById('view_staff_data');
const viewstaffData = document.getElementById('viewstaffData');


// staff form for data new add
staff_Add_Form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const mess = document.querySelector('.mess');

    let form_data = new FormData(e.target);
    // console.log(form_data); //>>  FormData {  }

    let data = Object.fromEntries(form_data.entries())
    // console.log(data); // Object { name: "", call: "", location: "", gender: "Male", photo: "" } //browser
    let { photo, gender, location, call, name } = data;

    if( gender == '' || location == '' || call == '' || name == ''){
        mess.innerHTML = Alert.danger('All filds are require')
    }else {
        LStorage.set("staff", data);
        staff_Add_Form.reset();
        getAllStaff();
    }


    
})

// check with browser console log
// 
getAllStaff();
function getAllStaff() {
    let data = LStorage.get('staff');
    // console.log(data);
    let staff_list = "";
    data.map((data , index)=>{
        let { photo, gender, location, call, name  } = data;
        staff_list += `
        <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${call}</td>
            <td>${location}</td>
            <td>${gender}</td>
            <td><img style=" height:50px; width:50px; " src="${photo ? photo : 'assets/img/okqlvc2w.bmp'}" alt=""></td>
            <td>
                <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal"><i class="fas fa-eye"></i></button>
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" ><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" data-bs-toggle="modal" onclick="alert(${ index })" data-bs-target="#deleteModal" ><i class="fas fa-trash"></i></button>
            </td>
        </tr>
        
        `
    })

    staff_data_list.innerHTML = staff_list;
}
