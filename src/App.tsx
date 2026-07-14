import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-red-500">ChildBeGone</h1>
      <Button onClick={() => console.log("clicked")}>
        Unlock
      </Button>
    </div>
  );
}