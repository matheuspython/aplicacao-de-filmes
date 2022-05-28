import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  .container{
    width: 1280px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

  }
`;

export const LeftSection = styled.section`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 75px);
  flex-direction: column;
  gap: 5px;
`

export const RightSection = styled.section`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 75px);
 
`

export const FormStyle = styled.form`
  width: 100%;
  height: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: rgb(32, 32, 36);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input{
    width: 80%;
    height: 45px;

    /* max-width: 300px; */
    border-radius: 19px;
    padding-left: 15px;
    border: 0;
    background-color: rgb(18, 18, 20);
    color: white;
    outline:0;
    &:focus{
    border: 1px solid rgb(130, 87, 229);
    }
  }
  button{
    width: 80%;
    background-color: transparent;
    border: 1px solid #8257e5;
    color: #fff;
    border-radius: 12px;
    height: 45px;
    transition:.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 5px;
    font-size: 15px;
    &:hover, &:focus{
      background-color: #8257e5;
    }
    svg{
      width: 20px;
    }
  }
`