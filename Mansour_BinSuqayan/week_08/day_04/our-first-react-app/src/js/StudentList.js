import React from "react";
import Student from "./Student"

class StudentList extends React.Component {
    render(){
        const students = 
           ["Faisal_Al-Qahtani","Mada_Alwuthaynani","Njod_Alnasser","Atheer_Minwar",
           "Halimah_Alshahrani","Rawan_Albahouth","Sami_Aldahlawi","Noura_Alsubaie",
           "Noura_Alhadlaq","Jafar_Alhajji","Dalal_Saeed","Alanoud_AlRasheed","Razan_Almusa",
           "Leana_Alqurashi","Sarah_AlFadly","Mashael_Almosallam","Wafa_Alturaifi","Abdullah_AlQahtani",
           "Sultan_Alsamaani","Thekra_Alowais","Sarah_Alasadi","Mohammed_abdulqader","Saud_Almotairy",
           "Mansour_Bin Suqayan","Haya_AlMousa","Ali_Alsubaie"];
           const items = students.map(function(s){
               return <Student name={s}/>;
           });
           
        return(
            <div>
                <h1> All Studends</h1>
                <ul>
                    {items}
                    
                </ul>
            </div>
        );
    }
}

export default StudentList;


