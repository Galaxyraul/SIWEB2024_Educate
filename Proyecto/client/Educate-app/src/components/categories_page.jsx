import Categories from "./categories";
import ChatContainer from "./chat";
import Ad from "./ads";

const Categories_page = () =>{
    return(
        <div className="flex">
        <ChatContainer />
        <Categories />
        <Ad />
        </div>
    );
}
export default Categories_page