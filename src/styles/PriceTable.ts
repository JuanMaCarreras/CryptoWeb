import styled from 'styled-components'


export const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
`

export const Table = styled.table`
  border: solid 2px red;
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

export const TableHead = styled.thead`

`

export const TableHeadRow = styled.tr`
  border: 1px solid #ddd;

  th {
    padding: 14px;
    padding-left: 3rem;
    padding-right: 1.4rem;

    &:first-child {
      padding-left: 5rem;
      text-align: left;
    }

    &:not(:first-child) {
      text-align: right;
    }
  }
    //agregar diseño responsive

`

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #ddd; 

   td {
    padding: .2rem;
    padding-left: .6rem;
    padding-right: 1.4rem;

    &:first-child {
      align-items: center;
    }

    &:not(:first-child) {
      text-align: right;
    }
  }

  
    //agregar diseño responsive

`



export const CoinInfo = styled.td`
  display: flex;
  align-items: flex-start;

  p {
   margin-right: 1.9rem;

  }

  img {
    width: 25px;
    margin-right: 11px;
  }

  span {
    display: block;
    margin-right: 8px;

    &:last-child {
      font-weight: bold;
      color: #555;
    }
  }

`

export const Button = styled.button`
  display: flex

`