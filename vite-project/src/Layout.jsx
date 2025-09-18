
import Menu from './Menu'
function Layout(props){
return <div > 
   <main><Menu/></main>
    {props.children}
</div>
}
export default Layout;
