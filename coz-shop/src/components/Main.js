import Menu from "./menu"

const Main = ({menuOn,menuHandle}) => {
    return <main className="page_Container">
       {menuOn? <Menu menuHandle={menuHandle}/> : ''} 
    </main> 
}

export default Main