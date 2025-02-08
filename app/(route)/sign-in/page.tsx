import { LoginForm } from "@/app/_components/LoginForm"

import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/login.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-center object-cover dark:brightness-[0.2] dark:grayscale"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  )
}
