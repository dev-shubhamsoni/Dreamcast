import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Pen } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { editUserData } from "@/redux/slice/mainSlice";

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

interface Number {
  id: number;
}

export function EditUserComp({ id }: Number) {

  const userData = useSelector((state: RootState) => state.mainSlice.userData);
  
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
      id,
    };

    dispatch(editUserData(main));
    setOpen(false);
  }

  useEffect(() => {
    const userProf = userData?.find((item) => item.id === id);

    if (userProf) {
      form.setValue("name", userProf?.name);
      form.setValue("email", userProf?.email);
      form.setValue("phone", userProf?.phone);
      form.setValue("city", userProf?.address?.city);
      form.setValue("zipcode", userProf?.address?.zipcode);
    }
  }, [id, form, userData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Pen size={18} className=" cursor-pointer" />
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
