import { logout } from '../../services/apiAuth';
import ButtonIcon from '../../ui/ButtonIcon'
import { useLogout } from './useLogout'

export default function Logout(){
    const {Logout, isLoading} = useLogout();
    return <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini/>}
    </ButtonIcon>
}