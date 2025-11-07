import React from "react";
import styled from "styled-components";

const Gallery = ({ setSelectedImage }) => {
  const images = [
    "https://arkajainuniversity.ac.in/wp-content/uploads/2024/10/Technika-2024-poster.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtKu0QLFYPLrWUTZvHNFmRmF6sNqnKRacxDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRx1dWcl7SBiLx0SXnRDKvoFZAOCBY09HUDT9HdsnOhV-TTWoShNItbKiBNv4sozMKrA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDIBFWsdSym2U8sfHvGZZ2BYvxbc2GHDsyQ&s",
    "https://technika-soeit.netlify.app/images/memories%20-3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fa2-14WrFcD2zZ3OnXwLw6mR6bvJK_E8TA&s",
    "https://technika-soeit.netlify.app/images/memories%20-4.jpg",
  ];

  return (
    <StyledWrapper>
      <h1 className="gallery-title">GALLERY</h1>
      <div className="card">
        {images.map((src, index) => (
          <p 
            key={index}
            onClick={() => setSelectedImage && setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
          </p>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 2rem 0;

  .gallery-title {
    font-size: 2.2rem;
    background: linear-gradient(45deg, #06b6d4, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
    animation: glow 3s ease-in-out infinite alternate;
    font-family: "Orbitron", sans-serif;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 8px rgba(6, 182, 212, 0.5),
        0 0 16px rgba(139, 92, 246, 0.4);
    }
    to {
      text-shadow: 0 0 20px rgba(6, 182, 212, 0.9),
        0 0 30px rgba(139, 92, 246, 0.8);
    }
  }

  .card {
    width: 900px;
    height: 400px;
    border-radius: 8px;
    background: #111;
    display: flex;
    gap: 8px;
    padding: 0.5em;
    overflow: hidden;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.5s ease;
    background: #212121;
    border: 2px solid #00ffff44;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 3;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    border-radius: 8px;
  }

  .card p:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      width: 95%;
      height: auto;
    }

    .card p {
      flex: unset;
      height: 200px;
    }

    .card p:hover {
      flex: unset;
    }
  }
`;

export default Gallery;
