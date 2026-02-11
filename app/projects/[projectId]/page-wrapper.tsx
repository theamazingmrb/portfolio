'use client';

import dynamic from 'next/dynamic';

const ClientProjectPage = dynamic(() => import('./client-page'), { 
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

export default function ProjectPageWrapper({ project }: { project: any }) {
  return <ClientProjectPage project={project} />;
}
