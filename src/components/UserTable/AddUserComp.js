import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
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
    const form = useForm({
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
    function onSubmit(data) {
        const main = {
            ...data,
        };
        dispatch(addUserData(main));
        form.reset();
        setOpen(false);
    }
    return (_jsxs(Dialog, { open: open, onOpenChange: setOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { children: [" ", _jsx(Plus, { size: 18 }), " Add User"] }) }), _jsx(DialogContent, { className: "sm:max-w-[700px]", children: _jsx("div", { className: " w-full  gap-2  h-[100%] py-0 rounded-xl px-1  ", children: _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: " grid grid-cols-2 gap-5", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { className: "   ", children: [_jsx(FormLabel, { children: "Full Name *" }), _jsx(FormControl, { children: _jsx(Input, { className: " ", required: true, type: "text", placeholder: "Enter Full Name", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { className: "  ", children: [_jsx(FormLabel, { children: "Email *" }), _jsx(FormControl, { children: _jsx(Input, { className: " border-2 ", required: true, type: "email", placeholder: "Enter Email ld", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "phone", render: ({ field }) => (_jsxs(FormItem, { className: "  ", children: [_jsx(FormLabel, { children: "Phone Number" }), _jsx(FormControl, { children: _jsx(Input, { className: " ", type: "tel", placeholder: "Enter Mobile Number", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "city", render: ({ field }) => (_jsxs(FormItem, { className: "   ", children: [_jsx(FormLabel, { children: "City *" }), _jsx(FormControl, { children: _jsx(Input, { className: " ", required: true, type: "text", placeholder: "Enter City", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "zipcode", render: ({ field }) => (_jsxs(FormItem, { className: "  ", children: [_jsx(FormLabel, { children: "Zipcode *" }), _jsx(FormControl, { children: _jsx(Input, { className: " ", type: "text", placeholder: "Enter zipcode", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx("div", { className: "flex flex-col sm:flex-row gap-3 w-full col-span-2  mt-4", children: _jsx(Button, { className: " px-6 flex items-center gap-4 w-full md:w-auto  ", type: "submit", children: "submit" }) })] }) }) }) })] }));
}
