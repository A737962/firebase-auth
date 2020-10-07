/*
   Logger : 
    Avoid to use the console.log throughout the application.
*/

//Pass the message and component to get the console to print.
export function logMessage(message, logComponentName){
    if(message){
        if(logComponentName){
            console.log(`Log From ${logComponentName} : ${message}`);
        }else{
            console.log(message);
        }
    }else{
        throw Error('Please provide message parameter for logMessage');
    } 
}