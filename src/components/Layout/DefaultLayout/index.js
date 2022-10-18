import Header from 'src/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;
