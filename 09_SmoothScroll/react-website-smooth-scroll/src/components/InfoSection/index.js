import React from "react";

const InfoSection = () => {
  return (
    <div>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Header>Heading</Header>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home">Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;
