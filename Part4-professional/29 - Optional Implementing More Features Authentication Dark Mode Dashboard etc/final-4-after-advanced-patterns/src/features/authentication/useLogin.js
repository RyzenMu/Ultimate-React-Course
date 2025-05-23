import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: (user) => {
        console.log(user);
        queryClient.setQueryData(['user'], user.user)
      navigate("/dashboard");
    },
    onError: err => {
        console.error('Error', err)
        toast.error('provided password or email is incorrect')
    }
  });

  return {login, isLoading}
}
