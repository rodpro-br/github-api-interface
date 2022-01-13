import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName, createdAt, updatedAt, description }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperDescription>Description: {description}</S.WrapperDescription>
      <S.WrapperFullName>link: <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink></S.WrapperFullName>
      
      <S.WrapperCreatedAt>
      Creation Date: {new Date(createdAt).toLocaleDateString()}
      </S.WrapperCreatedAt>
      <S.WrapperUpdatedAt>
      Update Date: {new Date(updatedAt).toLocaleDateString()}
      </S.WrapperUpdatedAt>
      
    </S.Wrapper>
  );
};

export default RepositoryItem;
