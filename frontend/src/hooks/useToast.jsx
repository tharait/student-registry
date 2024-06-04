import { useState } from "react";

export function useToast() {
    const [toasts, setToasts] = useState([]);
    
    const addToast = (message) => {
        setToasts([...toasts, message]);
    };

    const removeToast = (index) => {
        const t = toasts.splice(index, 1);
        setToasts(t);
    }

    return {toasts, addToast, removeToast};
}