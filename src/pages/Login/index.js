import Loggin from 'src/components/Loggin';

function Loin() {
    const handleClick = () => {
        alert('Update...');
    };

    return <Loggin onClicks={handleClick} />;
}

export default Loin;
