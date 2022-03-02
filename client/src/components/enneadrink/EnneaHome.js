//libraries
import { Outlet } from 'react-router-dom';
//components
import DrinkNavBar from './DrinkNavBar';
import Logon from './user/Logon';

function EnneaHome() {

    return (
        <>
            {<br />}
            <DrinkNavBar />

            {<br />}
            {<br />}

            <Outlet />

            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}

            <Logon />
        </>
    )
}

export default EnneaHome;