import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useChecking(){
    const queryClient = new QueryClient();
    const navigate = useNavigate("/");
    const {mutate: checkin, isLoading:isCheckingIn} = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId {
            status: 'checked-in',
            isPaid: true,
        }),
        onSuccess: (data) =>{
            toast.success(`Booking #${data.id} successfully checked-in`);
            queryClient.invalidateQueries({active:true});
        },
        onError: () => toast.error(`there was an error while cheking in`)
    });
    return {checkin, isCheckingIn}
}