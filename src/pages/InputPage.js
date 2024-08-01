import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f4f4f9;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    color: #4a148c;
  }

  label {
    margin: 1rem 0 0.5rem;
    color: #4a148c;
  }

  input, textarea {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: Calibri, sans-serif;
    font-size: 14px;
  }

  input[type="file"] {
    padding: 0.5rem;
  }

  .add-citation {
    margin: 1rem 0;
    background: #4a148c;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #6a1b9a;
    }
  }
`;

const PreviewContainer = styled.div`
  flex: 1;
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #4a148c;
  }

  p {
    text-align: justify;
    font-family: Calibri, sans-serif;
    font-size: 14px;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    margin-top: 1rem;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
`;
const InputPage = () => {
    const navigate = useNavigate();
  const [abstract, setAbstract] = useState('');
  const [abstractImages, setAbstractImages] = useState([]);
  const [summary, setSummary] = useState('');
  const [summaryImages, setSummaryImages] = useState([]);
  const [methodology, setMethodology] = useState('');
  const [methodologyImages, setMethodologyImages] = useState([]);
  const [results, setResults] = useState('');
  const [resultsImages, setResultsImages] = useState([]);
  const [conclusion, setConclusion] = useState('');
  const [conclusionImages, setConclusionImages] = useState([]);
  const [citations, setCitations] = useState([{ id: Date.now(), text: '' }]);

  const handlePublish = () => {
    const submissionData = {
      abstract,
      summary,
      methodology,
      results,
      conclusion,
      citations
    };

    // Save submissionData to local storage for demonstration purposes
    localStorage.setItem('submissionData', JSON.stringify(submissionData));

    // Redirect to display page
    navigate('/display');
}
  const handleImageUpload = (setImages, event) => {
    const files = Array.from(event.target.files);
    setImages(prevImages => [...prevImages, ...files]);
  };

  const handleCitationChange = (id, value) => {
    setCitations(prevCitations => prevCitations.map(citation => 
      citation.id === id ? { ...citation, text: value } : citation
    ));
  };

  const addCitation = () => {
    setCitations(prevCitations => [...prevCitations, { id: Date.now(), text: '' }]);
  };

  return (
    <>
      <PageContainer>
        <h1>Input Sectional Content</h1>
        <FormContainer>
          <Form>
            <h2>Abstract</h2>
            <textarea 
              placeholder="Enter abstract text" 
              value={abstract} 
              onChange={(e) => setAbstract(e.target.value)} 
            />
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={(e) => handleImageUpload(setAbstractImages, e)} 
            />

            <h2>Summary</h2>
            <textarea 
              placeholder="Enter summary text" 
              value={summary} 
              onChange={(e) => setSummary(e.target.value)} 
            />
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={(e) => handleImageUpload(setSummaryImages, e)} 
            />

            <h2>Methodology</h2>
            <textarea 
              placeholder="Enter methodology text" 
              value={methodology} 
              onChange={(e) => setMethodology(e.target.value)} 
            />
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={(e) => handleImageUpload(setMethodologyImages, e)} 
            />

            <h2>Results</h2>
            <textarea 
              placeholder="Enter results text" 
              value={results} 
              onChange={(e) => setResults(e.target.value)} 
            />
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={(e) => handleImageUpload(setResultsImages, e)} 
            />

            <h2>Conclusion</h2>
            <textarea 
              placeholder="Enter conclusion text" 
              value={conclusion} 
              onChange={(e) => setConclusion(e.target.value)} 
            />
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={(e) => handleImageUpload(setConclusionImages, e)} 
            />

            <h2>Citations</h2>
            {citations.map((citation, index) => (
              <input 
                key={citation.id}
                type="text"
                placeholder={`Citation ${index + 1}`}
                value={citation.text}
                onChange={(e) => handleCitationChange(citation.id, e.target.value)}
              />
            ))}
            <button type="button" className="add-citation" onClick={addCitation}>Add Citation</button>
            <button type="button" className="add-citation" onClick={handlePublish}>Publish</button>
          </Form>

          <PreviewContainer>
            <Section>
              <h3>Abstract</h3>
              <p>{abstract}</p>
              <div className="image-grid">
                {abstractImages.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Abstract" />
                ))}
              </div>
            </Section>

            <Section>
              <h3>Summary</h3>
              <p>{summary}</p>
              <div className="image-grid">
                {summaryImages.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Summary" />
                ))}
              </div>
            </Section>

            <Section>
              <h3>Methodology</h3>
              <p>{methodology}</p>
              <div className="image-grid">
                {methodologyImages.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Methodology" />
                ))}
              </div>
            </Section>

            <Section>
              <h3>Results</h3>
              <p>{results}</p>
              <div className="image-grid">
                {resultsImages.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Results" />
                ))}
              </div>
            </Section>

            <Section>
              <h3>Conclusion</h3>
              <p>{conclusion}</p>
              <div className="image-grid">
                {conclusionImages.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Conclusion" />
                ))}
              </div>
            </Section>

            <Section>
              <h3>Citations</h3>
              <div>
                {citations.map((citation, index) => (
                  <p key={citation.id}>{citation.text}</p>
                ))}
              </div>
            </Section>
          </PreviewContainer>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default InputPage;
