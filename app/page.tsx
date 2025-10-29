import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="pt-16 min-h-screen bg-zinc-50 dark:bg-black">
      <div className="flex min-h-screen items-center justify-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Welcome to LabsMac
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>
    </div>
  );
}