import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
