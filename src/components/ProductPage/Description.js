import styled from "styled-components";

export default function Description() {
  return (
    <DescriptionComponent>
      <h2>Descrição do Produto</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        aperiam laboriosam esse explicabo atque maiores quod, voluptates
        corporis eligendi nam quas, facere aliquid sunt? Soluta tenetur quis
        odio dignissimos! Voluptates id dolorum possimus fugiat asperiores
        aspernatur fugit? Quod alias earum architecto, rem laboriosam officia
        eligendi vitae minus voluptatibus fugit sunt a aliquam, magnam
        temporibus fuga! Vel accusantium et error reprehenderit asperiores sunt
        accusamus laboriosam quidem magni rem magnam obcaecati in praesentium
        numquam dolorem quibusdam veniam sapiente excepturi, impedit ea? Saepe
        doloremque commodi atque magni impedit accusamus voluptas, neque a
        obcaecati voluptatum dicta autem, dolorum eum, tenetur explicabo
        architecto reprehenderit rerum.
      </p>
    </DescriptionComponent>
  );
}

const DescriptionComponent = styled.article`
  text-align: left;

  h2 {
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.2px;

    margin-bottom: 0.8125rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    letter-spacing: 0.2px;

    padding-right: 1rem;
  }
`;
