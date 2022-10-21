import React from "react";
import { MenuContainer, BotoesMenu } from "./style-menuVertical"

const MenuVertical = () => {
    return (
      <MenuContainer>
        <ul>
          <BotoesMenu>Início</BotoesMenu>
          <BotoesMenu>Em alta</BotoesMenu>
          <BotoesMenu>Inscrições</BotoesMenu>
          <hr />
          <BotoesMenu>Originais</BotoesMenu>
          <BotoesMenu>Histórico</BotoesMenu>
        </ul>
      </MenuContainer>
    )
}

export default MenuVertical