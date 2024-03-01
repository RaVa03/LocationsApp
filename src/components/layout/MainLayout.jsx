import "./MainLayout.css"
import MainNavigation from "./MainNavigation"
export default function MainLayout(props){
    return(
        <div>
            <MainNavigation/>
            <main className="main">
                
                {props.children}
            </main>
        </div>
    )
}