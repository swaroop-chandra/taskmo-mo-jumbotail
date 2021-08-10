const getTimeString=(value)=>{
    if(value===0){
        return `12 AM`;
    }
    if(value>0 && value<12){
        return `${value} AM`;
    }
    if(value===12){
        return `12 PM`;
    }
    return `${value-12} PM`; 
}

export {getTimeString};