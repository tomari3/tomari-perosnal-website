import styled from "styled-components";

export const StyledProjects = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin-bottom: 10rem;

  flex-wrap: wrap;
  .project {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: clamp(350px, 60vw, 1200px);

    border-radius: 1rem;
    padding: 1rem;

    .header {
      font-size: 3rem;
      grid-area: header;
      text-align: center;
    }

    .images {
      grid-area: img;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .img {
      flex: 1 0 200px;
    }

    img {
      height: auto;
      width: 100%;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .description {
      text-transform: uppercase;
      font-size: 0.8rem;
      opacity: 0.8;
    }

    .tech-stack {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      height: 3rem;
      span {
        height: 100%;
        aspect-ratio: 1;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    a {
      color: var(--gradient-blue3);
      font-weight: bold;
      font-size: 1.2rem;
      text-decoration: none;
      position: relative;

      &.none {
        color: grey;
        pointer-events: none;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 5px;
        background-color: var(--gradient-blue3);
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }
`;
