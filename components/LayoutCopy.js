import Footer from "./Footer";
import Navbar from "./Navbar";

// all children from app.js - wrapped by Layout - will have nav and footer
// by referencing the children
const LayoutCopy = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            {children }
            <Footer />
        </div>
     );
}
 
export default LayoutCopy;