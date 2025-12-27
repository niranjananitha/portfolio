
export interface ProjectDetail {
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

export const projectDetails: Record<string, ProjectDetail> = {
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
