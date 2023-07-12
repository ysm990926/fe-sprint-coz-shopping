import Menu from "./menu"

const Bookmark = ({menuOn,menuHandle}) =>{
    return <div>
        {menuOn? <Menu menuHandle={menuHandle}/> : ''}
    </div>
}

export default Bookmark