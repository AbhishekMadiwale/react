import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)
    // check if online or offline user is
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[])

    // It will be boolean value
    return onlineStatus;
}

export default useOnlineStatus;