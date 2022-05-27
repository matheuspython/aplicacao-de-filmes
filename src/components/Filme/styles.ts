import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  max-width: 250px;
  background-color: #41414d;
  border-radius: 20px;
  img{
    width: 100%;
    border-radius: 8px 8px 0 0;
    min-height: 300px;
    max-height: 300px;
  }
  .container{
    padding: 15px;
  }
  h1{
    text-align: center;
  }
  p{
      font-size: 14px;
      text-align: justify;
  }
`;
