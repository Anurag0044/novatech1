import React, { useState } from "react";
import styled from "styled-components";

const Card = () => {
  // Convenor data
  const convenors = [
    {
      name: "Dr Arvind",
      img: "https://technika-soeit.netlify.app/images/Dr.%20Arvind%20Kumar%20Pandey.jpg",
    },
    {
      name: "Dr. Ashwini",
      img: "https://technika-soeit.netlify.app/images/Dr.%20Ashwini%20Kumar.jpg",
    },
  ];

  // Faculty Coordinator data
  const faculty = [
    {
      name: "Rashi Anwar",
      img: "https://technika-soeit.netlify.app/images/Prof.%20Syed%20Rashid%20Anwar.jpg",
    },
    {
      name: "Mamatha",
      img: "https://technika-soeit.netlify.app/images/Prof.%20Mamatha%20V..jpg",
    },
    {
      name: "Divya",
      img: "https://technika-soeit.netlify.app/images/Prof.%20Divya%20Paikaray.jpg",
    },
    {
      name: "Viranshu",
      img: "https://technika-soeit.netlify.app/images/Dr.%20Viranshu%20Kumar.jpg",
    },
    {
      name: "Sayantani",
      img: "https://technika-soeit.netlify.app/images/Prof.%20Sayantani%20De.jpg",
    },
    {
      name: "Prem Nath Suman",
      img: "https://technika-soeit.netlify.app/images/Dr.%20Prem%20Nath%20Suman.jpg",
    },
  ];

  // Student Coordinators
  const studentcoordinators = [
    {
      name: "Srijan Paul",
      img: "https://technika-soeit.netlify.app/images/Srijan%20Paul.jpg",
    },
    {
      name: "Raj Jet Sonkar",
      img: "https://technika-soeit.netlify.app/images/Raj%20Jet%20Sonkar.jpg",
    },
    {
      name: "Shubham Thakur",
      img: "https://technika-soeit.netlify.app/images/Shubham%20Thakur.jpg",
    },
    {
      name: "Nikita Gope",
      img: "https://technika-soeit.netlify.app/images/Nikita%20Gope.jpg",
    },
    {
      name: "Adeeb Razi",
      img: "https://technika-soeit.netlify.app/images/Adeeb%20Razi.jpg",
    },
    {
      name: "Swayam Nanda",
      img: "https://technika-soeit.netlify.app/images/Swayam%20Nanda.jpeg",
    },
  ];

  // Extra student coordinators to load later
  const moreStudents = [
    // {
    //   name: "Ananya Singh",
    //   img: "https://via.placeholder.com/150x150?text=Ananya+Singh",
    // },
    // {
    //   name: "Ravi Kumar",
    //   img: "https://via.placeholder.com/150x150?text=Ravi+Kumar",
    // },
    // {
    //   name: "Simran Gupta",
    //   img: "https://via.placeholder.com/150x150?text=Simran+Gupta",
    // },
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <StyledWrapper>
      {/* ---- CONVENOR SECTION ---- */}
      <h1>CONVENOR</h1>
      <div className="container">
        {convenors.map((c, index) => (
          <div
            key={index}
            data-text={c.name}
            style={{ "--r": index * 10 - 15 }}
            className="glass"
          >
            <img src={c.img} alt={c.name} />
          </div>
        ))}
      </div>

      {/* ---- FACULTY COORDINATORS SECTION ---- */}
      <h1>FACULTY COORDINATORS</h1>
      <div className="container fade-in">
        {faculty.map((f, index) => (
          <div
            key={index}
            data-text={f.name}
            style={{ "--r": index * 10 - 15 }}
            className="glass"
          >
            <img src={f.img} alt={f.name} />
          </div>
        ))}
      </div>

      {/* ---- STUDENT COORDINATORS SECTION ---- */}
      <h1>STUDENT COORDINATORS</h1>
      <div className="container fade-in">
        {studentcoordinators.map((s, index) => (
          <div
            key={index}
            data-text={s.name}
            style={{ "--r": index * 10 - 15 }}
            className="glass"
          >
            <img src={s.img} alt={s.name} />
          </div>
        ))}

        {/* Show extra student coordinators when clicked */}
        {showMore &&
          moreStudents.map((s, index) => (
            <div
              key={index + 100}
              data-text={s.name}
              style={{ "--r": index * 10 - 15 }}
              className="glass"
            >
              <img src={s.img} alt={s.name} />
            </div>
          ))}
      </div>

      {/* Load More Button */}
      {!showMore && (
        <button className="load-more" onClick={() => setShowMore(true)}>
          Load More
        </button>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at center, #0a0a1a, #020617);
  font-family: "Orbitron", sans-serif;
  padding: 40px 0;

  h1 {
    font-size: 2.2rem;
    background: linear-gradient(45deg, #06b6d4, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 50px 0 40px 0;
    text-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
    animation: glow 3s ease-in-out infinite alternate;
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

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    transition: all 0.5s ease;
  }

  .glass {
    position: relative;
    width: 220px;
    height: 260px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease;
    border-radius: 16px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
    overflow: hidden;
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.4),
      0 0 40px rgba(6, 182, 212, 0.3);
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: linear-gradient(45deg, #06b6d4, #8b5cf6);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .glass img {
    width: 110px;
    height: 110px;
    object-fit: contain;
    filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.6));
    transition: transform 0.4s ease, filter 0.4s ease;
  }

  .glass:hover img {
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.8));
  }

  .load-more {
    margin-top: 30px;
    padding: 10px 25px;
    background: linear-gradient(45deg, #06b6d4, #8b5cf6);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .load-more:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
  }

  .fade-in {
    animation: fadeIn 1s ease forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Card;
