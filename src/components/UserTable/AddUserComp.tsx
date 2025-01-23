import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "@/redux/slice/mainSlice";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(2, {
    message: "Please enter a 10 digit mobile number",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  zipcode: z.string().min(6, {
    message: "Please enter atlease 6 digit zipcode.",
  }),
});

export function AddUserComp() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      zipcode: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const main = {
      ...data,
    };

    dispatch(addUserData(main));
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          {" "}
          <Plus size={18} /> Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div className=" w-full  gap-2  h-[100%] py-0 rounded-xl px-1  ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-2 gap-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="   ">
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        className=" "
                        required
                        type="text"
                        placeholder="Enter Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="  ">
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        className=" border-2 "
                        required
                        type="email"
                        placeholder="Enter Email ld"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="  ">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        className=" "
                        type="tel"
                        placeholder="Enter Mobile Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="   ">
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input
                        className=" "
                        required
                        type="text"
                        placeholder="Enter City"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem className="  ">
                    <FormLabel>Zipcode *</FormLabel>
                    <FormControl>
                      <Input
                        className=" "
                        type="text"
                        placeholder="Enter zipcode"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-3 w-full col-span-2  mt-4">
                <Button
                  className=" px-6 flex items-center gap-4 w-full md:w-auto  "
                  type="submit"
                >
                  submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
