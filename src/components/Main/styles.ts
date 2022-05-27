import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  header{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
    .searchField{
      width: 100%;
      max-width: 350px;
      padding-left: 15px;
      height: 35px;
      border-radius: 8px;
      border: 0;
    }
    .btn-search{
      width: 100%;
      max-width: 350px;
      height: 35px;
      border-radius: 8px;
      border: 0;
      cursor: pointer;
      color: #fff;
      background-color: #3e8ed8;
      transition: .5s;
      &:hover{
        color: #3e8ed8;
        background-color: #fff;
      }
    }
  }
`;

export const MainField = styled.main`
  width: 100%;
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px 2%;
    ul{
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`