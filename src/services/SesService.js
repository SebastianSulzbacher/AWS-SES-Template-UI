import AWS from "aws-sdk";

class SesService {
    
    sesClient = null;

    constructor(){
        this.sesClient = new AWS.SES(); 
    }

    getTemplates(){

    }

    createTemplate(templateData){

    }

    updateTemplate(templateData){

    }

    deleteTemplate(templateId){

    }   

}