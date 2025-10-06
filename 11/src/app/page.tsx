import { TopicCreateForm } from "./components/TopicCreateForm";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl mt-2">Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
