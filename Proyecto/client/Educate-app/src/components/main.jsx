import ChatContainer from "./chat";
import Ad from "./ads";

const Main = ()=>{
    return(
        <div className="flex">
            <ChatContainer/>
            <div>Tus ultimas dudas</div>
            <Ad/>
        </div>
    )
}
export default Main