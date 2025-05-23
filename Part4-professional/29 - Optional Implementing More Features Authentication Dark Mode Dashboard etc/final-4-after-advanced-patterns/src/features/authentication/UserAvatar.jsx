export default function UserAvatar(){
    const {user} = useUser();
    const {fullName, avatar} = user.user_metadata;
    return <StyledUserAvatar>
        <Avatar src={avatar||'default-user.jpg'} alt={`Avatar of ${fullName}`}/>
        <span>full name</span>
    </StyledUserAvatar>
}