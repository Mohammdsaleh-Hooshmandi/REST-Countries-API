import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";

const HeaderContainer = styled.header``;

const ToggleThemeBtn = styled.button`
    ${p => console.log(p.theme)}
`;

const Header = () => {
    const [mode, setMode] = useState({ icon: 'fa-solid fa-moon', name: 'Dark Mode' });
    const { changeTheme, id } = useContext(ThemeContext);

    const themeChangeHandler = () => {
        changeTheme();
        if (id === 'light') {
            setMode({ icon: 'fa-solid fa-sun', name: 'Light Mode' });
            return;
        }
        if (id === 'dark') {
            setMode({ icon: 'fa-solid fa-moon', name: 'Dark Mode' });
        }
    };

    return (
        <HeaderContainer>
            <h1>Where in the world?</h1>

            <ToggleThemeBtn
                type="button"
                onClick={themeChangeHandler}
            >
                <i className={mode.icon} />
                {mode.name}
            </ToggleThemeBtn>
        </HeaderContainer>
    );
};

export default Header;