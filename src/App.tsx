import { invoke } from "@tauri-apps/api/tauri";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/partials/Header";
import { AppWrapper } from "./components/wrappers/AppWrapper";
import { MainSectionWrapper } from "./components/wrappers/MainSectionWrapper";
import { Container } from "./components/wrappers/Container";
import { MenuWrapper } from "./components/menus/MenuWrapper";
import { Navigation } from "./components/menus/Navigation";
import { UserPortal } from "./components/menus/UserPortal";
import "./App.css";
import { ChatBoxWrapper } from "./components/wrappers/ChatBoxWrapper";

function App() {
  return (
    <>
      <AppWrapper>
        <Sidebar>
          <MenuWrapper rowLayout={false}>
            <Navigation rowLayout={false} />
          </MenuWrapper>
        </Sidebar>
        <Container>
          {/* Container wrapp Header & MainSectionWrapper */}
          <Header>
            <MenuWrapper rowLayout={true}>
              <Navigation rowLayout={true} />
              <UserPortal />
            </MenuWrapper>
          </Header>
          <MainSectionWrapper>
            {/* This secction changes depending on the menu used. */}
            <ChatBoxWrapper />
          </MainSectionWrapper>
        </Container>
      </AppWrapper>
    </>
  );
}

export default App;
