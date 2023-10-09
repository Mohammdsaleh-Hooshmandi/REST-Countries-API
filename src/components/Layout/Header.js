import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background-color: ${p => p.theme.color_2};
    color: ${p => p.theme.color_1};
    box-shadow: 2px 0 10px #ddd;

    > h1 {
        font-size: 3rem;
    }

    @media (max-width: 556px) {
        > h1 {
            font-size: 2rem;
        }

        > button {
            font-size: 1.4rem;
        }
    }
`;

const ToggleThemeBtn = styled.button`
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: ${p => p.theme.color_1};

    > i {
        margin-right: 5px;
    }
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