import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 1rem;
  background-color: #f4f4f9;
`;

const SubmissionBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .author {
    font-size: 1rem;
    font-weight: bold;
    color: #4a148c;
  }

  .title {
    font-size: 0.9rem;
    color: #6a1b9a;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  height: 90%;
  overflow-y: auto;

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #4a148c;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background: #6a1b9a;
    }
  }
`;

const DisplayPage = () => {
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Sample data for display
  const submissions = [
    {
      id: 1,
      author: 'John Doe',
      title: 'Research on AI',
      image: 'https://via.placeholder.com/100',
      abstract: 'This is an abstract of the research paper.',
      summary: 'This is a summary of the research paper.',
      methodology: 'This is the methodology of the research paper.',
      results: 'These are the results of the research paper.',
      conclusion: 'This is the conclusion of the research paper.',
      citations: ['Citation 1', 'Citation 2']
    },
    // Add more submissions as needed
  ];

  const handleClick = (submission) => {
    setSelectedSubmission(submission);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <PageContainer>
        <h1>Research Papers Display</h1>
        {submissions.map(submission => (
          <SubmissionBlock key={submission.id} onClick={() => handleClick(submission)}>
            <img src={submission.image} alt={submission.title} />
            <div className="info">
              <div className="author">{submission.author}</div>
              <div className="title">{submission.title}</div>
            </div>
          </SubmissionBlock>
        ))}
        {selectedSubmission && (
          <ModalBackground show={modalVisible} onClick={closeModal}>
            <ModalContent onClick={e => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>Close</button>
              <h2>{selectedSubmission.title}</h2>
              <h3>Abstract</h3>
              <p>{selectedSubmission.abstract}</p>
              <h3>Summary</h3>
              <p>{selectedSubmission.summary}</p>
              <h3>Methodology</h3>
              <p>{selectedSubmission.methodology}</p>
              <h3>Results</h3>
              <p>{selectedSubmission.results}</p>
              <h3>Conclusion</h3>
              <p>{selectedSubmission.conclusion}</p>
              <h3>Citations</h3>
              <ul>
                {selectedSubmission.citations.map((citation, index) => (
                  <li key={index}>{citation}</li>
                ))}
              </ul>
            </ModalContent>
          </ModalBackground>
        )}
      </PageContainer>
    </>
  );
};

export default DisplayPage;
