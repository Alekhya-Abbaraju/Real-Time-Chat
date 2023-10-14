
import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return(
    <div style={{height:'100vh'}}>
    <PrettyChatWindow 
        projectId='5afec482-66b4-4f85-849b-92d6fdfa4986'
        username={"amma"}
        secret={"Amma123"}
        style={{height:'100%'}}
    />
    </div>
    )
}
export default ChatsPage