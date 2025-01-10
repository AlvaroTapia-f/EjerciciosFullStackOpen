const Notification = ({name, errorMessage}) => {

//    console.log(name, errorMessage);
    

    if (name === null && errorMessage === null){
        return null
    }
    if(errorMessage){
        return(
            <>
                <p className="notificationError">{errorMessage}</p>
            </>
        )
    }
    if(name){
        return (
            <>
                <p className="notificationAdd"> Added {name} </p>
            </>
        )
    }
}

export default Notification;