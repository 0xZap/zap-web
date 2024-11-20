import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, CircularProgress, LinearProgress } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PeopleIcon from '@mui/icons-material/People';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface Project {
  title: string;
  marketCap: number;
  progress: number;
  symbol: string;
}

interface Category {
  title: string;
  symbol: string;
  projects: Project[];
}

interface AIMetrics {
  users: number;
  humanEvals: number;
  llmEvals: number;
  unitTests: number;
  qualityData: number;
  evalMatch: number;
  accuracy: number;
  activeContributors: number;
  dataQuality: number;
  communityScore: number;
}

interface AIProjectMetrics {
  title: string;
  symbol: string;
  marketCap: number;
  progress: number;
  metrics: {
    users: number;
    humanEvals: number;
    llmEvals: number;
    unitTests: number;
    qualityData: number;
    evalMatch: number;
  };
  molecularStructure?: string; // For visualization
  status: 'LIVE' | 'UPCOMING';
}

const ProjectCard = ({ title, marketCap, progress, symbol }: Project) => (
  <Paper
    sx={{
      p: 3,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(20px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "transform 0.3s ease-in-out",
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
      }
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
      <Typography color="white" variant="h6">
        {title}
      </Typography>
      <Typography color="white" variant="body2">
        ${symbol}
      </Typography>
    </Box>
    <Typography color="white" variant="h5" sx={{ mb: 2 }}>
      ${marketCap.toLocaleString()}
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography color="white" variant="body2">
        MARKETCAP
      </Typography>
      <Typography color="white" variant="body2">
        {progress}% COMPLETED
      </Typography>
    </Box>
  </Paper>
);

const CategoryTabs = ({ categories, selectedCategory, onSelect }: {
  categories: Category[];
  selectedCategory: string | null;
  onSelect: (title: string) => void;
}) => (
  <Box
    sx={{
      display: 'flex',
      gap: 2,
      mb: 4,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      padding: '8px',
      borderRadius: '12px',
      width: 'fit-content',
      margin: '0 auto'
    }}
  >
    {categories.map((category) => (
      <Box
        key={category.title}
        onClick={() => onSelect(category.title)}
        sx={{
          cursor: 'pointer',
          padding: '8px 24px',
          borderRadius: '8px',
          backgroundColor: selectedCategory === category.title ? 'rgba(0, 255, 100, 0.1)' : 'transparent',
          color: selectedCategory === category.title ? '#00ff64' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: selectedCategory === category.title ? 'rgba(0, 255, 100, 0.15)' : 'rgba(255, 255, 255, 0.05)'
          }
        }}
      >
        <Typography variant="body1">
          {category.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: 'rgba(0, 255, 100, 0.1)',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '0.75rem'
          }}
        >
          {category.projects.length}
        </Typography>
      </Box>
    ))}
  </Box>
);

const MetricCard = ({ title, value, icon, trend }: {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: number;
}) => (
  <Paper
    sx={{
      p: 3,
      backgroundColor: 'rgba(0, 255, 100, 0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(0, 255, 100, 0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {trend && (
        <Typography
          color={trend > 0 ? '#00ff64' : '#ff4444'}
          variant="caption"
        >
          {trend > 0 ? '+' : ''}{trend}%
        </Typography>
      )}
    </Box>
    <Box sx={{ mb: 2 }}>{icon}</Box>
    <Typography variant="h4" color="white" sx={{ mb: 1 }}>
      {typeof value === 'number' ? value.toLocaleString() : value}
    </Typography>
    <Typography color="rgba(255,255,255,0.7)" variant="body2">
      {title}
    </Typography>
  </Paper>
);

const ProgressCircle = ({ value, label }: { value: number; label: string }) => (
  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress
      variant="determinate"
      value={value}
      size={100}
      thickness={4}
      sx={{ color: '#00ff64' }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6" color="white">{value}%</Typography>
      <Typography variant="caption" color="rgba(255,255,255,0.7)">
        {label}
      </Typography>
    </Box>
  </Box>
);

const AIProjectCard = ({ project }: { project: AIProjectMetrics }) => (
  <Paper
    sx={{
      p: 3,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(0, 255, 100, 0.2)',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ 
      position: 'absolute',
      top: 16,
      right: 16,
      backgroundColor: project.status === 'LIVE' ? 'rgba(0, 255, 100, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      padding: '4px 12px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }}>
      {project.status === 'LIVE' && <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#00ff64',
        }}
      />}
      <Typography color={project.status === 'LIVE' ? '#00ff64' : 'white'}>
        {project.status}
      </Typography>
    </Box>

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" color="white">
            {project.title}
          </Typography>
          <Typography color="#00ff64">
            ${project.symbol}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <MetricCard
          title="Human Evaluations"
          value={project.metrics.humanEvals}
          trend={12}
          icon={<PeopleIcon sx={{ color: '#00ff64' }} />}
        />
      </Grid>

      <Grid item xs={6}>
        <MetricCard
          title="LLM Evaluations"
          value={project.metrics.llmEvals}
          trend={8}
          icon={<AutoFixHighIcon sx={{ color: '#00ff64' }} />}
        />
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ mt: 2 }}>
          <Typography color="rgba(255,255,255,0.7)" gutterBottom>
            Training Progress
          </Typography>
          <LinearProgress
            variant="determinate"
            value={project.progress}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'rgba(255,255,255,0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#00ff64',
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography color="#00ff64" variant="body2">
              {project.progress}% Complete
            </Typography>
            <Typography color="rgba(255,255,255,0.7)" variant="body2">
              Target: 100%
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All");

  const categories: Category[] = [
    {
      title: "AI / Agents",
      symbol: "AI",
      projects: [
        // { title: "Project Alpha", marketCap: 50000000, progress: 15.5, symbol: "ALP" },
      ]
    },
    {
      title: "Finance",
      symbol: "FIN",
      projects: []
    },
    {
      title: "DeSci",
      symbol: "SCI",
      projects: []
    },
  ];

  const allProjects = categories.flatMap(cat => cat.projects);

  const projectsToDisplay = selectedCategory === "All" 
    ? allProjects 
    : categories.find(cat => cat.title === selectedCategory)?.projects || [];

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
        <Typography
          variant="h4"
          color="white"
          sx={{
            mb: 4,
            fontFamily: "Space Grotesk, sans-serif",
          }}
        >
        </Typography>
        
        <CategoryTabs 
          categories={[
            { title: "All", symbol: "ALL", projects: allProjects },
            ...categories
          ]}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {selectedCategory && (
          projectsToDisplay.length ? (
            <Grid container spacing={3}>
              {projectsToDisplay.map((project) => (
                <Grid item xs={12} md={4} key={project.title}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography 
              variant="h5" 
              color="rgba(255,255,255,0.7)" 
              sx={{ 
                textAlign: 'center', 
                mt: 8,
                fontStyle: 'italic'
              }}
            >
              Coming Soon
            </Typography>
          )
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProjectsPage; 