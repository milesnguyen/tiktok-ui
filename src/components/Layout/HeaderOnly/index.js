import Header from 'src/components/Layout/components/Header';

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;
