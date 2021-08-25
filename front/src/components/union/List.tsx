import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colorTheme } from '../../theme';

const Global = createGlobalStyle`
    .table-responsive-sm {
        //width: 65%;
        width: 100%;
    }
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto 0 auto;
  padding: 1rem 0;
  width: 65%;

  .addBtnContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }
`;

const TableBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .BtnContainer {
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  font-size: 0.9rem;
  background-color: ${colorTheme.BTN_NAVY};
`;

const SelectBox = styled.select`
  border: 1px solid ${colorTheme.BORDER_GRAY};
  width: 120px;
  height: 40px;
  margin-left: 0.6rem;
  padding-left: 0.3rem;
`;

const Table = styled.table`
  width: 100%;

  & > thead {
    border-top: 1.5px solid #000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  & > tbody > tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  td {
    padding: 1rem 0;
  }

  tbody > tr:hover {
    background-color: ${colorTheme.HOVER_GRAY};
  }

  th {
    padding: 1rem 0;
  }

  .title {
    padding-left: 1rem;
    width: 60%;
    cursor: pointer;
  }

  .date {
    text-align: center;
    color: ${colorTheme.FONT_GRAY};
  }

  .people {
    text-align: center;
    color: ${colorTheme.MID_BLUE};
  }
`;

const AddBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${colorTheme.BORDER_GRAY};
  background-color: #fff;
`;

const List = () => {
  return (
    <TableContainer>
      <TableBtnContainer>
        <span>전체 목록</span>
        <div className="BtnContainer">
          <Button>지금 청원하기</Button>
          <SelectBox>
            <option value="date">최신순 보기</option>
            <option value="recmd">추천순 보기</option>
          </SelectBox>
        </div>
      </TableBtnContainer>
      <Table>
        <thead>
          <tr>
            <th>제목</th>
            <th>청원 만료일</th>
            <th>참여인원</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">
              해머를 목에 달고 살다가 결국 사라진 검둥이, 학대자 처벌 강화
            </td>
            <td className="date">2021-09-19</td>
            <td className="people">3,471명</td>
          </tr>
          <tr>
            <td className="title">
              해머를 목에 달고 살다가 결국 사라진 검둥이, 학대자 처벌 강화
            </td>
            <td className="date">2021-09-19</td>
            <td className="people">3,471명</td>
          </tr>
          <tr>
            <td className="title">
              해머를 목에 달고 살다가 결국 사라진 검둥이, 학대자 처벌 강화
            </td>
            <td className="date">2021-09-19</td>
            <td className="people">3,471명</td>
          </tr>
        </tbody>
      </Table>
      <div className="addBtnContainer">
        <AddBtn>더 보기</AddBtn>
      </div>
    </TableContainer>
  );
};

export default List;

{
  /* <TableContainer>
<Global />
<Table responsive="sm">
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>
</TableContainer> */
}
