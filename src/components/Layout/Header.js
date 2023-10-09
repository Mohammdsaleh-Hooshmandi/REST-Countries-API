import styled from "styled-components";

const HeaderContainer = styled.header``;

const ToggleThemeBtn = styled.button``;

const Header = () => {

    return (
        <HeaderContainer>
            <h1>Where in the world?</h1>

            <ToggleThemeBtn
                type="button"
            >
                <i className="fa-solid fa-moon" />
                Darke Mode
            </ToggleThemeBtn>
        </HeaderContainer>
    );
};

export default Header;