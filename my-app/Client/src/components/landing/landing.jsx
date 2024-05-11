import ChatContainer from "../chat";
import LoginRegister from "../profile/login_register/login_register";

const Landing = ({ user }) => {
    return(
        <div className="flex">
            <ChatContainer/>
            <div>
                some sample text
            </div>
            <LoginRegister/>
        </div>
    );
}

export default Landing;

