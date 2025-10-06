import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl mt-2">Top Posts</h1>
      </div>
      <div>
        <Button color="secondary" variant="bordered">
          Create a Topic
        </Button>
      </div>
    </div>
  );
}
