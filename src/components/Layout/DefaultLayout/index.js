import Header from './Header';
// import Sidebar from './Sidebar';
import Footer from './Footer';

const DefaultLayout = ({children}) => {
    return (
        <div>
            <Header />
            <div>
                {/* <Sidebar /> */}
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;