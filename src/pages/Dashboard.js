import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PageContainer = styled.div`
  padding: 1rem;
  background-color: #f4f4f9;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: #4a148c;
`;

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StatisticBox = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
  text-align: center;
`;

const PieChartContainer = styled.div`
  position: relative;
  height: 400px;
`;

const ProfileSection = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Dashboard = () => {
  // Sample data for the pie chart
  const pieData = {
    labels: ['Available Jobs', 'Completed Jobs', 'Pending Jobs'],
    datasets: [
      {
        data: [300, 150, 50],
        backgroundColor: ['#4a148c', '#6a1b9a', '#ff5722'],
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  const user = {
    name: 'John Doe',
    email: 'admin1@scitome',
    role: 'Admin',
  };

  return (
    <>
      <PageContainer>
        <ProfileSection>
          <SectionTitle>Profile Information</SectionTitle>
          <ProfileInfo>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </ProfileInfo>
        </ProfileSection>
        <Section>
          <SectionTitle>Job Statistics</SectionTitle>
          <StatisticsContainer>
            <StatisticBox>
              <h3>Available Jobs</h3>
              <p>300</p>
            </StatisticBox>
            <StatisticBox>
              <h3>Completed Jobs</h3>
              <p>150</p>
            </StatisticBox>
            <StatisticBox>
              <h3>Pending Jobs</h3>
              <p>50</p>
            </StatisticBox>
            <StatisticBox>
              <h3>Job Score</h3>
              <p>85/100</p>
            </StatisticBox>
          </StatisticsContainer>
        </Section>
        <Section>
          <SectionTitle>Business Analytics</SectionTitle>
          <PieChartContainer>
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}` } } } }} />
          </PieChartContainer>
        </Section>
      </PageContainer>
    </>
  );
};

export default Dashboard;
