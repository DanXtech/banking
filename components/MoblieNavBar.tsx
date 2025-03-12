"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils'

const MoblieNavBar = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left"
                    className="border-none bg-white !p-5"
                >
                    <Link href="/" className=' cursor-pointer flex items-center gap-1 px-1 w-full
            '>
                        <Image
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt='Horizon logo'
                        />

                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>

                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6
                            pt-16 text-white
                            ">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', {
                                                    'active': isActive,
                                                })} 
                                            >
                                              
                                                    <Image
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        width={20}
                                                        height={20}
                                                        className={cn({
                                                            'brightness-[3]': isActive, // Brighten icon when active
                                                        })}
                                                    />
                                              
                                                <p className={cn('text-16 font-semibold text-black', {
                                                    '!text-white': isActive, // Brighten icon when active
                                                })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}

                            </nav>
                        </SheetClose>
                    </div>



                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MoblieNavBar