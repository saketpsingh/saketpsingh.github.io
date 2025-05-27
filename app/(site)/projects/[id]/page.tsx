import { ProjectsData } from '@/components/Projects/ProjectsData'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type PageProps = {
  params: {
    id: string
  }
}

// Optional: Generates dynamic metadata for each project
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const project = ProjectsData.find((p) => p.id === params.id)

  if (!project) return { title: 'Project Not Found' }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    }
  }
}

// Main Page Component
export default function ProjectPage({ params }: PageProps) {
  const project = ProjectsData.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {project.title}
        </h1>

        <div className="grid gap-6">
          {project.duration && (
            <div className="text-gray-700 dark:text-indigo-400">
              <span className="font-semibold">Duration:</span> {project.duration}
            </div>
          )}

          {project.description && (
            <div className="text-gray-700 dark:text-indigo-400">
              <p>{project.description}</p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="text-gray-700 dark:text-indigo-400">
              <span className="font-semibold">Technologies:</span>{" "}
              {project.technologies.join(", ")}
            </div>
          )}

          {project.image && (
            <div className="mt-4">
              <img 
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

// ✅ Required for static generation of dynamic routes
export function generateStaticParams() {
  return ProjectsData.map((p) => ({ id: p.id }))
}
