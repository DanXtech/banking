"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Siderbar = ({ user }: SiderbarProps) => {
    const pathname = usePathname()
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-10'>
                <Link href="/" className=' cursor-pointer flex items-center gap-2
            '>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='Horizon logo'
                        className='size-[24px] max-xl:size-14'
                    />

                    <h1 className='sidebar-logo'>Horizon</h1>
                </Link>
                <div className='flex flex-col gap-4'>
                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={cn('sidebar-link', {
                                    'active': isActive,
                                })}
                            >
                                <div className="relative size-6 ">
                                    <Image
                                        src={item.imgURL}
                                        alt={item.label}
                                        fill
                                        className={cn({
                                            'brightness-[3]': isActive, // Brighten icon when active
                                        })}
                                    />
                                </div>
                                <p className={cn('sidebar-label', {
                                    '!text-white': isActive, // Brighten icon when active
                                })}>
                                    {item.label}
                                </p>
                                {/* <p className="sidebar-label">
                {item.label}
              </p> */}
                            </Link>
                        );
                    })}
                      USER
                </div>
             
            </nav>

            FOOTER
        </section>
    )
}

export default Siderbar