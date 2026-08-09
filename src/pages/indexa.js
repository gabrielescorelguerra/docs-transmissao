import React from 'react';
import FeatureDisplay from '@site/docs/intro.mdx';
import MDXContent from '@theme/MDXContent';

export default function LandingPage() {
  return (
    <div>
      <MDXContent>
        <FeatureDisplay />
      </MDXContent>
    </div>
  );
}