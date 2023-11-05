import { toast } from "react-toastify/dist/components";


export const toaster  = ()=>{
    toast.success('Copied to clipboard!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}