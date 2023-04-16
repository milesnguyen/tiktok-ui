import Loggin from 'src/components/Loggin';

function Loin() {
    const handleClick = () => {
        alert('SẼ SỚM ĐƯỢC CẬP NHẬT TRONG TƯƠNG LAI');
    };

    return <Loggin onClicks={handleClick} />;
}

export default Loin;
