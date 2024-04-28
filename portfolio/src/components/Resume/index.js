import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { resumeData , data } from "../../data/resumeData";
import { experiences , education  } from "../../data/constants"; // assuming you have a file for resume data
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const ResumeCard = styled.div`
  width: 100%;
  
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  fontcolor: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const ResumeCardEdu = styled.div`
max-width: 850px;
border: 1px solid rgba(255, 255, 255, 0.125);
width: 100%;
background-color: rgba(17, 25, 40, 0.83);
border: 1px solid rgba(255, 255, 255, 0.125);
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
border-radius: 16px;
padding: 18px 36px;
display: flex;
flex-wrap: wrap;
margin-top: 0;
gap: 20px;
justify-content: left;
  
`;
const ImageExp = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const ResumeCardTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;


const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Item = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;
const Image = styled.img`
width: 24px;
  height: 24px;
`;
const ResumeCardName = styled.div`
 width: 100%;
max-width: 500px;
background-color: rgba(17, 25, 40, 0.83);
border: 1px solid rgba(255, 255, 255, 0.125);
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
border-radius: 16px;
padding: 18px 36px;

fontcolor: ${({ theme }) => theme.text_primary};
@media (max-width: 768px) {
  max-width: 400px;
  padding: 10px 36px;
}
@media (max-width: 500px) {
  max-width: 330px;
  padding: 10px 36px;
}
`;

const Resume = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Resume</Title>
        <SectionContainer> 

        {data.map((section, index) => (
            <Tilt key={index}>
              <ResumeCardName>
                <ResumeCardTitle>{section.title}</ResumeCardTitle>
              {section.links.map((item, itemIndex) => (
                    <><Image src={item.img} />
                    <Item key={itemIndex}>
                    {item.title}</Item>
                    </>  

                  //<Item key={itemIndex}>{item}</Item>
                ))}
              </ResumeCardName>
            </Tilt>
          ))}
          <ResumeCardEdu>
            <ResumeCardTitle>Education</ResumeCardTitle>
          {education.map((education, index) => (
            <Tilt>
                <ResumeCard key={`education-${index}`} > 
                <ImageExp src={education.img} />
                <Role>{education.school}</Role>
                <Company>{education.degree}</Company>
                <Date>{education.date}</Date>
                <Description>{education?.desc && education?.desc}</Description>
                </ResumeCard>
            </Tilt>
          ))}
          </ResumeCardEdu>
          <ResumeCardEdu>
          <ResumeCardTitle>Experience</ResumeCardTitle>
        {experiences.map((experience, index) => (
             <Tilt>
            <ResumeCard key={index}>
                
                <ImageExp src={experience.img} />
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Date>{experience.date}</Date>
                <Description>{experience?.desc && experience?.desc}</Description>
            </ResumeCard>
            </Tilt>
            
        ))}
        </ResumeCardEdu>
        </SectionContainer>
      </Wrapper>
    </Container>
  );
};

export default Resume;
