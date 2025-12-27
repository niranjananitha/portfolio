"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectDetail {
  title: string;
  subtitle?: string;
  year?: string;
  description?: string;
  technologies?: string[];
  stats?: Array<{ label: string; value: string }>;
  features?: string[];
  highlights?: string[];
  icon?: string;
  fullContent?: {
    sections: Array<{
      title: string;
      content: string | string[]; // Can be paragraph or list
      type?: 'text' | 'list' | 'ordered-list';
    }>;
  };
}

const projectDetails: Record<string, ProjectDetail> = {
  'ai-powered-plant-disease-detection-system': {
    title: 'AI-Powered Plant Disease Detection System',
    subtitle: 'Detect plant diseases in seconds using computer vision!',
    year: '2024',
    description: 'Our web application empowers farmers and gardeners to quickly identify plant diseases by simply uploading a photo of a leaf.',
    technologies: ['TensorFlow.js', 'Next.js', 'React', 'Tailwind CSS', 'Google Teachable Machine'],
    stats: [
      { label: 'Accuracy', value: '92.4%' },
      { label: 'Classes', value: '3 (Healthy, Mildew, Leaf Spot)' }
    ],
    icon: '🌿',
    fullContent: {
      sections: [
        {
          title: 'Elevator Pitch',
          content: 'Our web application empowers farmers and gardeners to quickly identify plant diseases by simply uploading a photo of a leaf. Using TensorFlow.js and a custom-trained machine learning model, the system analyzes the image in real-time and provides instant diagnosis with treatment recommendations, helping users take timely action to protect their crops.',
          type: 'text'
        },
        {
          title: 'Key Features',
          content: [
            'Real-Time Analysis: Instant disease detection in the browser',
            'Mobile-First Design: Works seamlessly on smartphones',
            '3-Class Detection: Identifies Healthy, Powdery Mildew, and Leaf Spot',
            'Confidence Metrics: Displays prediction probabilities',
            'Treatment Tips: Provides actionable advice'
          ],
          type: 'list'
        },
        {
          title: 'Technical Deep Dive',
          content: [
            'Input (224x224 RGB) → Convolutional Layers → Max Pooling → Flatten → Dense Layers → Output (3 Classes)',
            'Training Data: 800+ images per class (balanced dataset)',
            'Augmentation: Rotation, flipping, brightness adjustment',
            'Validation Accuracy: 92.4%',
            'Optimizations: Browser-based TensorFlow.js, Model quantization, Caching mechanism'
          ],
          type: 'list'
        },
        {
          title: 'Future Roadmap',
          content: [
            'Expand to 10+ plant species',
            'Add multilingual support',
            'Integrate with IoT soil sensors',
            'Develop mobile app version'
          ],
          type: 'list'
        }
      ]
    }
  },
  'ai-powered-automation-agent': {
    title: 'AI-Powered Automation Agent',
    subtitle: 'Automate web tasks with 97.45% confidence',
    year: '2025',
    description: 'An AI-powered agent built with DeepSeek-R1 and Gemini to automate tasks like online shopping.',
    technologies: ['DeepSeek-R1', 'Gemini', 'Google API', 'Browser-use', 'n8n'],
    stats: [
      { label: 'Confidence', value: '97.45%' }
    ],
    icon: '🤖',
    fullContent: {
      sections: [
        {
          title: 'Overview',
          content: 'This AI-powered agent automates tasks like online shopping with a 97.45% confidence rate through a simple, no-code interface. It enables users to perform automated tasks without programming skills.',
          type: 'text'
        },
        {
          title: 'Technologies Used',
          content: [
            'DeepSeek-R1: Core AI model for advanced reasoning and task automation.',
            'Gemini: Secondary AI model for natural language processing.',
            'Google API Keys: Enable integration with Google services.',
            'Browser-use: Library for browser automation (navigating websites, interacting with elements).',
            'n8n: Workflow automation platform for custom task pipelines.'
          ],
          type: 'list'
        },
        {
          title: 'Using the AI Agent',
          content: [
            '1. Entering a Task: Type your automation request (e.g., "Purchase an item on Amazon").',
            '2. Submitting Your Task: Click the Submit Task button.',
            '3. Managing Tasks: Use Stop, Pause, or Clear controls.'
          ],
          type: 'list'
        },
        {
          title: 'Known Limitations',
          content: [
            'No Real-Time Data: Cannot access live stock prices due to API constraints.',
            'API Rate Limits: May experience delays if limits are exceeded.',
            'Task Complexity: Ambiguous tasks may require clearer instructions.'
          ],
          type: 'list'
        }
      ]
    }
  },
  'ai-powered-speech-to-isl-translation-project': {
    title: 'AI-Powered Speech to ISL Translation',
    subtitle: 'Real-time speech-to-sign language translation',
    year: '2024',
    description: 'Innovative AI solution enabling real-time speech-to-sign language translation for hearing-impaired individuals.',
    technologies: ['Python', 'Google Translate API', 'Speech Recognition', 'NLP', 'OpenCV'],
    icon: '🤟',
    fullContent: {
      sections: [
        {
          title: 'System Overview',
          content: 'The system captures spoken input, processes it using speech recognition and NLP, and translates it into ISL gesture videos. It aims to bridge communication gaps and improve accessibility.',
          type: 'text'
        },
        {
          title: 'System Workflow',
          content: [
            '1. Audio Input Processing: Converts speech into text.',
            '2. Text Analysis: Applies NLP to extract meaning.',
            '3. Translation Engine: Processes text via Google Translate API.',
            '4. Gesture Mapping: Maps text to ISL gestures.',
            '5. Real-time Display: Renders sign language videos.'
          ],
          type: 'list'
        },
        {
          title: 'Key Features',
          content: [
            'Real-time speech recognition for accurate transcription',
            'Advanced NLP preprocessing and keyword extraction',
            'Seamless integration with Google Translate API',
            'AI-powered ISL gesture video generation'
          ],
          type: 'list'
        },
        {
          title: 'Installation & Setup',
          content: [
            'Install Python 3.8+',
            'Install dependencies: pip install SpeechRecognition googletrans opencv-python',
            'Load the gesture video dataset in the "gestures" directory',
            'Run the program: python main.py'
          ],
          type: 'ordered-list'
        }
      ]
    }
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const rawSlug = params?.title as string;
  // Normalize slug: replace %20 with dashes if needed, though usually standard slug
  const projectSlug = rawSlug?.toLowerCase();

  const project = projectDetails[projectSlug]; // Simple lookup

  if (!project) {
    // Fallback or fuzzy match could go here, but strict is fine for now
    // Let's try to match if keys are subsets (for safety)
    const match = Object.keys(projectDetails).find(key => key.includes(projectSlug) || projectSlug.includes(key));
    if (match) {
      const p = projectDetails[match];
      return <Content project={p} />
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

  return <Content project={project} />;
}

function Content({ project }: { project: ProjectDetail }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 md:px-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl w-full border border-white/10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-white/10 gap-4">
          <div className="flex items-center gap-4">
            {project.icon && <span className="text-5xl">{project.icon}</span>}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {project.title}
              </h1>
              {project.subtitle && <p className="text-xl text-gray-400">{project.subtitle}</p>}
            </div>
          </div>
          {project.year && <span className="px-4 py-2 bg-white/5 rounded-full text-gray-300 font-mono border border-white/10">{project.year}</span>}
        </div>

        {/* Stats Grid */}
        {project.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {project.stats.map((stat, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-primary font-bold text-xl mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {project.technologies && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Full Content */}
        {project.fullContent && (
          <div className="space-y-12">
            {project.fullContent.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary pl-4">{section.title}</h2>

                {section.type === 'list' && Array.isArray(section.content) ? (
                  <ul className="grid gap-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : section.type === 'ordered-list' && Array.isArray(section.content) ? (
                  <ol className="grid gap-3 list-decimal pl-5 text-gray-300">
                    {section.content.map((item, i) => (
                      <li key={i} className="pl-2">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line bg-white/5 p-6 rounded-xl border border-white/5">
                    {section.content}
                  </p>
                )}
              </section>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
          <Link href="/#projects" className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white font-medium flex items-center gap-2">
            ← Back to All Projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
