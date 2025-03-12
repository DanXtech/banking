import MoblieNavBar from "@/components/MoblieNavBar";
import Siderbar from "@/components/Siderbar";
import Image from "next/image";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: "John", lastName: 'Doe'}
  return (
   <main className="flex h-screen w-full font-inter">
    <Siderbar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
        <div>
          <MoblieNavBar user={loggedIn}/>
        </div>
      </div>
      {children}
    </div>
  
   </main>
  );
}
