import styled from 'styled-components';

export const Container = styled.header`
  & > svg {
    display: none;
  }

  @media (max-width: 800px) {
    & {
      border-bottom: 2px solid ${({ theme }) => theme.colors.black};
      height: 32px;
      display: flex;
      margin: 16px;
      align-items: center;
    }
    & > svg {
      display: block;
      height: 100%;
    }
  }
`;

export const MenuContainer = styled.nav<{ open?: boolean }>`
  margin: 0 40px 40px 40px;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  width: 100% - 80px;
  h1 {
    width: 240px;
    height: 100%;
  }
  & > span {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
    margin-bottom: 8px;
    margin-top: 40px;
  }
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    list-style: none;
    font-size: 24px;

    li {
      margin-left: 32px;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray800};
      }
      &.enphasis {
        a {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }

  @media (max-width: 800px) {
    & {
      transform: ${({ open }) =>
        open ? 'translateX(0)' : 'translateX(-100%)'};
      background-color: ${({ theme }) => theme.colors.white};
      display: flex;
      flex-direction: column;
      margin: 0;
      width: 240px;
      min-height: 100vh;
      border: 1px solid ${({ theme }) => theme.colors.black};
      transition: transform 0.4s ease;
      position: absolute;
      top: 0;
      left: 0;
    }

    & > h1 {
      display: flex;
      padding: 8px;
      height: auto;
      width: 100%;
      justify-content: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
    & > span {
      display: none;
    }
    & > ul {
      flex-direction: column;
      height: fit-content;
      margin-top: 16px;
      li {
        margin: 16px 0 0 0;
      }
    }
  }
`;
