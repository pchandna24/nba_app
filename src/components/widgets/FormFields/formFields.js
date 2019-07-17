import React from 'react';
import './formFields.css';






const FormFields = ({formdata,change,id}) =>{

    const renderTemplate = () => {
        let formTempalte = null;

        switch(formdata.element){
            case('input'):
                break;
            default:
                formTemplate = null;
        }
        return formTempalte;
        

    }
    return(
        <div>
            {renderTemplate()}
        </div>
    )
}



export default FormFields;