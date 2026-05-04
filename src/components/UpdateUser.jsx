"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");

    await authClient.updateUser({
      name,
      image,
    }, {
      onSuccess: () => {
        setLoading(false);
        setIsOpen(false);
        window.location.reload();
      },
      onError: (ctx) => {
        setLoading(false);
        alert(ctx.error.message);
      }
    });
  };

  return (
    <>
      <Button onPress={() => setIsOpen(true)} variant="secondary">
        <BiEdit /> Update Profile
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update User</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form id="update-profile-form" onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" required />
                    </TextField>
                    <TextField className="w-full" name="image" type="url">
                      <Label>Image Url</Label>
                      <Input placeholder="Enter your Image Url" required />
                    </TextField>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button onPress={() => setIsOpen(false)} variant="secondary">
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  form="update-profile-form" 
                  isLoading={loading}
                  color="primary"
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}