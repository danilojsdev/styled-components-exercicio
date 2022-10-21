import React from "react";
import { PainelContainer, Imagem } from "./style-painelVideos"
import CardVideo from "./CardVideo/CardVideo";

const PainelVideos = () => {

  const infVideo = [
    {
      titulo: "Título do vídeo1",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=1/"/>
    },
    {
      titulo: "Título do vídeo2",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=2/"/>
    },
    {
      titulo: "Título do vídeo3",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=3/"/>
    },
    {
      titulo: "Título do vídeo4",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=4/"/>
    },
    {
      titulo: "Título do vídeo5",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=5/"/>
    },
    {
      titulo: "Título do vídeo6",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=6/"/>
    },
    {
      titulo: "Título do vídeo7",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=7/"/>
    },
    {
      titulo: "Título do vídeo8",
      autor: "Danilo José Silva",
      image: <Imagem src="https://picsum.photos/400/400?a=8/"/>
    }
  ]

  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido!")
  }

  return (
    <PainelContainer>
      <CardVideo
        informacoes={infVideo} reproduz={reproduzVideo}
      />
    </PainelContainer>
  )
}

export default PainelVideos