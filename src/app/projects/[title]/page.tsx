
import { projectDetails } from '@/data/projects';
import ProjectContent from './ProjectContent';
import Link from 'next/link';

// This function generates the static paths for the dynamic routes at build time
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((title) => ({
    title: title,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ title: string }> }) {
  const { title } = await params;
  const rawSlug = title;
  // Normalize slug: replace %20 with dashes if needed, though usually standard slug
  const projectSlug = rawSlug?.toLowerCase();

  const project = projectDetails[projectSlug]; // Simple lookup

  if (!project) {
    // Fallback or fuzzy match could go here, but strict is fine for now
    // Let's try to match if keys are subsets (for safety)
    const match = Object.keys(projectDetails).find(key => key.includes(projectSlug) || projectSlug.includes(key));
    if (match) {
      const p = projectDetails[match];
      return <ProjectContent project={p} />
    }

    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project Not Found</h2>
          <p>Could not locate: {projectSlug}</p>
          <Link href="/#projects" className="text-primary hover:underline mt-4 inline-block">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return <ProjectContent project={project} />;
}
