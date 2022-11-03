import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--primery);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4{
    font-size:var(--fontMed);
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  
  .search {
    width: 100%;
    max-width: 500px;
    background: var(--secondery);
    display: flex;
    align-items: center;
    border-radius: 60px;
    padding: 1px 5px;
    margin: 0 10px;

    .searchicon {
      padding: 5px;
    }
    input {
      background: transparent;
      flex: 1;
      border: 0;
      outline: none;
      padding: 4px 10px;
      font-size: var(--fontMed);
      color: var(--white);

      :placeholder {
        color: var(--white);
      }
    }
  }
`;
