import React from "react";
import { MainContainer } from "./style-main"
import MenuVertical from "./MenuVertical/MenuVertical";
import PainelVideos from "./PainelVideos/PainelVideos";

const Main = () => {
    return (
      <MainContainer>
        <MenuVertical />
        <PainelVideos />                             
      </MainContainer>
    )
}

export default Main