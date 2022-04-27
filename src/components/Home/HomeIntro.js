import React, { useState } from "react";
import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import { HomeTextBlock } from "../../styles/HomeTextBlock";

export const HomeIntro = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  return (
    <HomeIntroWrapper>
      <HomeTextBlock
        active={active1}
        onMouseEnter={() => setActive1(!active1)}
        onMouseLeave={() => setActive1(!active1)}
      >
        self taught
      </HomeTextBlock>
      <HomeTextBlock
        active={active2}
        onMouseEnter={() => setActive2(!active2)}
        onMouseLeave={() => setActive2(!active2)}
      >
        developer
      </HomeTextBlock>
      <HomeTextBlock
        active={active3}
        onMouseEnter={() => setActive3(!active3)}
        onMouseLeave={() => setActive3(!active3)}
      >
        life long
      </HomeTextBlock>
      <HomeTextBlock
        active={active4}
        onMouseEnter={() => setActive4(!active4)}
        onMouseLeave={() => setActive4(!active4)}
      >
        designer
      </HomeTextBlock>
    </HomeIntroWrapper>
  );
};
