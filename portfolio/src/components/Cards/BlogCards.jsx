import React from 'react';
import styled from 'styled-components';


const LinkButton = styled.a`
width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Card = styled.div`
    width: 370px;
    height: 560px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${LinkButton} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
 `;
 const Title = styled.div`
 font-size: 20px;
 font-weight: 600;
 color: ${({ theme }) => theme.text_secondary};
 overflow: hidden;
 display: -webkit-box;
 max-width: 100%;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 overflow: hidden;
 text-overflow: ellipsis;
`;

const DateText = styled.span`
font-size: 12px;
margin-left: 2px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 80};
@media only screen and (max-width: 768px){
    font-size: 10px;
}
`;

const Description = styled.p`
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const Tag = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.primary};
background-color: ${({ theme }) => theme.primary + 15};
padding: 2px 8px;
border-radius: 10px;
`;



const BlogCard = ({ blog }) => {
  return (
    <Card>
      <Image src={blog.image} alt={blog.title} />
      <Title>{blog.title}</Title>
      <DateText>{blog.date}</DateText>
      <Description>{blog.description}</Description>
      <div>
        {blog.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
      <LinkButton href={blog.link} target="_blank">Read More</LinkButton>
    </Card>
  );
}

export default BlogCard;
