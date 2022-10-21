import { CardContainer, SectionCards} from "./style-cardVideo"

function CardVideo(props) {
  const informacoesDoUsuario = props.informacoes.map((informacao) => {
    return (
    <CardContainer onClick={props.reproduz}>
    {informacao.image}
    <h4>{informacao.titulo}</h4>
    <h5>{informacao.autor}</h5>
    </CardContainer>
    )
})

return (
    <SectionCards>
        {informacoesDoUsuario}
    </SectionCards>
)
}

export default CardVideo;