import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrap,
  ServicesCard,
  ServicesIcon,
  ServicesSub,
  ServicesP,
} from "./ServicesEl";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrap>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesSub>Reduce expense</ServicesSub>
          <ServicesP>We help reduce your fees</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesSub>Reduce expense</ServicesSub>
          <ServicesP>We help reduce your fees</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesSub>Reduce expense</ServicesSub>
          <ServicesP>We help reduce your fees</ServicesP>
        </ServicesCard>
      </ServicesWrap>
    </ServicesContainer>
  );
};

export default Services;
