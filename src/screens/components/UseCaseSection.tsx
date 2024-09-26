import React from "react";
import { Box } from "@mui/material";
import image1 from '../../assets/usecase/use_init1.svg';
import image2 from '../../assets/usecase/use_init2.svg';
import image3 from '../../assets/usecase/use_init3.svg';
import image4 from '../../assets/usecase/use_init4.svg';
import UseCaseCard from "./UseCase/UseCaseCard";
import UseCaseTitle from "./UseCase/UseCaseTitle";

const UseCaseSection: React.FC = () => {

  const useCases = [
    {
      id: 1,
      image: image1,
      text: 'P2P on-off rank with back transaction proofs',
    },
    {
      id: 2,
      image: image2,
      text: 'Incentivized social engagement',
    },
    {
      id: 3,
      image: image3,
      text: 'Social KYC including paymasters and applications',
    },
    {
      id: 4,
      image: image4,
      text: 'On-Chain Verifiable AI Services',
    },
  ];

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        textAlign: "center",
      }}
      id="Use Cases"
    >
      <UseCaseTitle />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: { xs: "32px", sm: "32px" },
          padding: { xs: "32px", sm: "24px" },
          maxWidth: "800px",
          margin: "12px auto 0",
        }}
      >
        {useCases.map((useCase, _index) => (
          <UseCaseCard key={useCase.id} image={useCase.image} text={useCase.text} />
        ))}
      </Box>
    </Box>
  );
};

export default UseCaseSection;
