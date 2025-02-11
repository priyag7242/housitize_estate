"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactPopupProps {
  isContactPopupOpen: boolean;
  setIsContactPopupOpen: (isOpen: boolean) => void;
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  countryCode: z.string().min(2, "Country code is required"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Mobile number must contain only digits"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
});

const ContactPopup = ({
  isContactPopupOpen,
  setIsContactPopupOpen,
}: ContactPopupProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log("Form Submitted", data);
    setIsContactPopupOpen(false);
    reset();
  };

  return (
    <Dialog
      open={isContactPopupOpen}
      onOpenChange={() => {
        setIsContactPopupOpen(false);
        reset();
      }}
    >
      <DialogContent className="sm:max-w-[540px] bg-white border-none">
        <DialogHeader className="space-y-6">
          <div className="space-y-2 text-start">
            <h2 className="text-5xl font-serif tracking-wide text-gray-700">
              We will connect
            </h2>
            <h2 className="text-5xl font-serif tracking-wide text-gray-700">
              with you
            </h2>
          </div>
          <div className="flex justify-end">
            <p className="text-gray-700 text-center max-w-[400px] mx-auto">
              We&apos;ll get in touch with you within <strong>4 hours.</strong>
            </p>
          </div>
        </DialogHeader>

        <form className="grid gap-6 py-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1">
            <Input
              className="border-0 border-b border-emertext-gray-700 text-gray-700 rounded-none bg-transparent px-0 focus-visible:ring-0 placeholder:text-gray-700/60"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-red-500 text-xs pl-1">
                {String(errors.name.message)}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex gap-2">
              <Input
                placeholder="eg: +91"
                className="w-[100px] border-0 text-gray-700 border-b border-emertext-gray-700 rounded-none bg-transparent px-0 focus-visible:ring-0 placeholder:text-gray-700/60"
                {...register("countryCode")}
              />
              <Input
                placeholder="Mobile"
                className="flex-1 text-gray-700 border-0 border-b border-emertext-gray-700 rounded-none bg-transparent px-0 focus-visible:ring-0 placeholder:text-gray-700/60"
                {...register("mobile")}
              />
            </div>
            {errors.countryCode?.message && (
              <p className="text-red-500 text-xs pl-1">
                {String(errors.countryCode.message)}
              </p>
            )}
            {errors.mobile?.message && (
              <p className="text-red-500 text-xs pl-1">
                {String(errors.mobile.message)}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              type="email"
              className="border-0 border-b border-emertext-gray-700 text-gray-700 rounded-none bg-transparent px-0 focus-visible:ring-0 placeholder:text-gray-700/60"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-red-500 text-xs pl-1">
                {String(errors.email.message)}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger className="border-0 border-b border-emertext-gray-700 bg-transparent px-2 rounded-sm focus-visible:ring-0 text-gray-800">
                <SelectValue placeholder="Choose Country" />
              </SelectTrigger>
              <SelectContent className="bg-white border-emertext-gray-700">
                <SelectItem
                  value="india"
                  className="focus:bg-emertext-gray-700/10"
                >
                  India
                </SelectItem>
                <SelectItem
                  value="usa"
                  className="focus:bg-emertext-gray-700/10"
                >
                  USA
                </SelectItem>
                <SelectItem
                  value="uk"
                  className="focus:bg-emertext-gray-700/10"
                >
                  UK
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.country?.message && (
              <p className="text-red-500 text-xs pl-1">
                {String(errors.country.message)}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="mt-4 w-full bg-gray-600 text-white border hover:bg-gray-700 hover:scale-105 transition duration-300 rounded-full py-6"
          >
            Submit
          </Button>

          <p className="text-xs text-gray-700/80 text-center">
            By submitting this form, you agree to our{" "}
            <a href="#" className="underline hover:text-gray-700">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-gray-700">
              terms of use
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
