import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckout(){
    const queryClient = new QueryClient();
    const navigate = useNavigate("/");
    const {mutate: checkout, isLoading:isCheckingOut} = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId {
            status: 'checked-out',
        }),
        onSuccess: (data) =>{
            toast.success(`Booking #${data.id} successfully checked-out`);
            queryClient.invalidateQueries({active:true});
        },
        onError: () => toast.error(`there was an error while cheking out`)
    });
    return {checkout, isCheckingOut}
}