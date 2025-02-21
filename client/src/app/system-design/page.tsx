// src/app/system-design/page.tsx
'use client';
import SystemDesignLayout from '@/app/components/SystemDesignLayout';

export default function NotesPage() {
  return (
    <SystemDesignLayout>
      <div>
        <h1 className="text-4xl font-bold text-indigo-700">System Design Notes</h1>
        <p className="text-gray-700 text-lg mt-4">Select a topic from the sidebar to begin.</p>
      </div>
    </SystemDesignLayout>
  );
}