import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import YouTubeVideo from '../components/YoutubeVideo';
import ScreenCapture from '../components/ScreenCapture';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  YouTubeVideo,
  ScreenCapture,
};