"use client";

import {
  Button,
  Divider,
  Form,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export function TopicCreateForm() {
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(
    null
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!session) {
      toast.error("请先登录后再创建话题");
      return;
    }
    const data: any = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    setSubmitted(data);
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button color="secondary" variant="bordered">
            Create a Topic
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <Form
            className="w-full max-w-xs p-4 flex flex-col gap-4"
            onSubmit={onSubmit}
          >
            <h1 className="text-lg font-bold">Create a Topic</h1>
            <Divider />
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
            />
            <Textarea
              isRequired
              errorMessage="Please enter a valid description"
              label="Description"
              labelPlacement="outside"
              name="description"
            />
            <Button color="secondary" type="submit" variant="bordered">
              Submit
            </Button>
            {submitted && (
              <div className="text-small text-default-500">
                You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
            )}
          </Form>
        </PopoverContent>
      </Popover>
      <Toaster position="top-right" />
    </>
  );
}
