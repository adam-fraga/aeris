import { invoke } from "@tauri-apps/api/tauri";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/partials/Header";
import { AppWrapper } from "./components/wrappers/AppWrapper";
import { MainSectionWrapper } from "./components/wrappers/MainSectionWrapper";
import { Container } from "./components/wrappers/Container";
import { Menu } from "./components/menus/Menu";
import "./App.css";

function App() {
  return (
    <>
      <AppWrapper>
        <Sidebar>
          <Menu />
        </Sidebar>
        <Container>
          {/* Contain header & MainSectionWrapper */}
          <Header>
            <Menu />
          </Header>
          <MainSectionWrapper>
            {/* This secction changes depending on the menu used. */}
          </MainSectionWrapper>
        </Container>
      </AppWrapper>
    </>
  );
}

export default App;
