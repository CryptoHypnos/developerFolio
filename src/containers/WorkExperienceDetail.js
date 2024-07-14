// src/pages/WorkExperienceDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { workExperiences } from '../portfolio';

const WorkExperienceDetail = () => {
  const { id } = useParams();
  const experience = workExperiences[id];

  if (!experience) {
    return <div>Work experience not found</div>;
  }

  return (
    <div>
      <h1>{experience.company}</h1>
      <p>{experience.role}</p>
      <p>{experience.description}</p>
      <p>{experience.date}</p>
    </div>
  );
};

export default WorkExperienceDetail;
